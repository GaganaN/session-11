import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import Search from "./components/Search"

function getTitle() {
  return "Fruits shopping List";
}

function App() {
  return (
    <div className="container">
      <h1>{getTitle()}</h1>
        <Search />
        <List stories={List} />
    </div>
  );
}
export default App;
