import React from 'react';
import TodoList from './TodoList.js';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <section id="todo-app">
        <header className="App-header">
          <h1>to-dos_aibars</h1>
          <TodoList />
        </header>
      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>
      </footer>
    </div>
  );
}

export default App;
