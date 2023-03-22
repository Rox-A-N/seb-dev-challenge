import React from 'react';
import Table from './Table';
import './App.css';

function App() {
  const GITHUB_API_URL = 'https://api.github.com';

  // const language = prompt("Enter Programming Language");
  
  // const handleSubmit = event => {
  //   event.preventDefault();
  // }

  return (
    <div className="page">
      <header className="App-header">
        <h1>Dev Code Challenge</h1>
        <h2>Rox A Niederkorn: Junior Software Engineer</h2>
      </header>
      <Table />
    </div>
  );
}

export default App;
