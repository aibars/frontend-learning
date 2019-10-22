import React from 'react';
import TodoInput from './TodoInput.js';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <section id="todo-app">
        <header className="App-header">
          <h1>to-dos_aibars</h1>
          <TodoInput />
        </header>
      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>
      </footer>
    </div>
  );
}

export default App;
