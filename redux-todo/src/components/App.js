import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

function App() {
  return (
    <div >
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;