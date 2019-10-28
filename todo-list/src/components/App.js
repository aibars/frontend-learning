import React from 'react';
import TodoList from './TodoList.js';
import '../styles/App.css';
import '../styles/TodoInput.css';
import TodoItem from './TodoItem.js';
let ACTIVE = 'active';
let ALL = 'all';
let COMPLETED = 'completed';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      todos: [],
      completed: false,
      editing: null,
      showing: this.props.showing,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleKeyDown(e) {
    if (e.key === 'Enter' && this.state.value !== '') {
      let todo = {
        id: this.state.todos.length,
        text: this.state.value,
        completed: false,
      };
      let list = this.state.todos.concat(todo);
      this.setState({
        todos: list,
        value: '',
      });
    }
  }

  toggleAll() {
    const todos = this.state.todos;

    todos.forEach((item, index) => {
      item.completed = true;
    });

    this.setState({
      todos: todos,
    })
  }

  clearCompleted() {
    const todos = this.state.todos;
    var list = todos.filter((item, index) => {
      return !item.completed;
    });

    this.setState({
      todos: list,
    });
  }

  edit(item) {
    this.setState({
      editing: item.id,
    });
  }

  onCheck(item) {
    const todos = this.state.todos;

    todos[item.id].completed = !todos[item.id].completed;
    let completed = this.state.todos.some((item) => {
      return item.completed;
    });

    this.setState({
      todos: todos,
      completed: completed,
    });
  }

  removeItem(item) {
    var list = this.state.todos.filter((value, index, arr) => {
      return value.id !== item.id;
    });

    this.setState({
      todos: list,
    });
  }

  render() {
    var itemsToShow = this.state.todos.filter((item, index, arr) => {
      switch (this.state.showing) {
        case ALL:
          return item;
        case ACTIVE:
          return !item.completed;
        case COMPLETED:
          return item.completed;
        default:
          return item;
      }
    });
    var itemsLeft = 0;
    const items = itemsToShow.map((item, i) => {
      if (!item.completed) itemsLeft++;
      return (
        <TodoItem key={item.id}
          todo={item}
          onCheck={(item) => this.onCheck(item)}
          removeItem={(item) => this.removeItem(item)}
          onEdit={(item) => this.edit(item)}
        />
      );
    });

    return (
      <div className="App">
        <section id="todo-app">
          <header className="App-header">
            <h1>to-dos_aibars</h1>
            <div>
              <input className="new-todo"
                ref={(input) => { this.nameInput = input; }}
                type="text"
                placeholder="What needs to be done?" value={this.state.value}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
              ></input>
              <TodoList
                itemsLeft={itemsLeft}
                todos={items}
                completed={this.state.completed}
                clearCompleted={() => this.clearCompleted()}
                toggleAll={() => this.toggleAll()} />
            </div>
          </header>
        </section>
        <footer className="info">
          <p>Double-click to edit a todo</p>
        </footer>
      </div>
    );
  }
}

export default App;
