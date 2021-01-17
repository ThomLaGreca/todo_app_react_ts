import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoItem, ToDoList } from './components'
import { useCollection } from './components/_hooks';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-Header-Text">ToDo App - React/Typescript</h1>
      </header>

      <div className="App-Lists">
        <ToDoList title="Incomplete Items"/>
        <ToDoList title="In Progress" />
        <ToDoList title="Done" />
      </div>

    </div>
  );
}

export default App;
