import React, { useEffect } from "react";
import { useState } from "react";

function Table() {
    const accessToken = process.env.GITHUB_ACCESS_TOKEN;
    const [language, setLanguage] = useState('');
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(
                `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`,
                {
                  headers:{
                    Authorization: `Bearer ${accessToken}`
                  }  
                }

            )
        }
    })

    const handleSubmit = event => {
        event.preventDefault();
        const url = `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`;
        fetch(url)
        .then(response => response.json())
        .then(data => setRepos(data.items.slice( 0, 5)))
        .catch(error => console.log(error));
}
 
    return(
        <div>
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">What Language Do You Choose?
            <input className="input"  type="text" 
            value={language}
            onChange={event => setLanguage(event.target.value)} />
          </label>
          <button
          className="button"
          type='submit' >Searching</button>
        </form>
        <table className="results-container">
          <thead>
            <tr className="row">
              <th>Name</th>
              <th>Description</th>
              <th>Stars⭐️</th>
            </tr>
          </thead>
          <tbody>
            {repos.map(repo => (
              <tr key={repo.id}>
                <td className="repo-name">{repo.name}</td>
                <td className="details-rows">{repo.description}</td>
                <td>{repo.stargazers_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    );
}


export default Table;