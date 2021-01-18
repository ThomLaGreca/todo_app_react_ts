import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ItemProvider } from './components/context';
import ToDoListContainer from './components/ToDoListContainer';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-Header-Text">ToDo App - React/Typescript</h1>
      </header>
      <ItemProvider>
        <ToDoListContainer />
      </ItemProvider>
    </div>
  );
}

export default App;
