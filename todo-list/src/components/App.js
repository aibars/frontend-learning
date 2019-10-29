import React from 'react';
import TodoList from './TodoList.js';
import '../styles/App.css';
import '../styles/TodoInput.css';
import TodoItem from './TodoItem.js';
import uuidv4 from 'uuid';
let ACTIVE = 'active';
let ALL = 'all';
let COMPLETED = 'completed';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      todos: [],
      areCompleted: false,
      editing: null,
      showing: ALL,
      allToggled: false,
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
        id: uuidv4(),
        text: this.state.value,
        completed: false,
      };
      let list = this.state.todos.concat(todo);
      this.setState({
        todos: list,
        value: '',
        hidden: false,
      });
    }
  }

  toggleAll() {
    const todos = this.state.todos;

    todos.forEach((item, index) => {
      item.completed = !this.state.allToggled;
    });

    this.setState({
      todos: todos,
      allToggled: !this.state.allToggled,
    });
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

    var idx = todos.findIndex((elem, index) => {
      return elem.id === item.id;
    });

    todos[idx].completed = !todos[idx].completed;

    let areCompleted = this.state.todos.some((item) => {
      return item.completed;
    });

    this.setState({
      todos: todos,
      areCompleted: areCompleted,
    });

    this.checkAllToggled();
  }

  removeItem(item) {
    var list = this.state.todos.filter((value, index, arr) => {
      return value.id !== item.id;
    });

    this.setState({
      todos: list,
    });
  }

  setAllItems() {
    let todos = this.state.todos;
    todos.forEach((item, index) => {
      item.hidden = false;
    });

    this.setState({
      todos: todos,
    });
  }

  setCompletedItems() {
    let todos = this.state.todos;
    todos.forEach((item, index) => {
      item.hidden = true;
      if (item.completed)
        item.hidden = false;
    });

    this.setState({
      todos: todos,
    });
  }

  setActiveItems() {
    let todos = this.state.todos;
    todos.forEach((item, index) => {
      item.hidden = true;
      if (!item.completed)
        item.hidden = false;
    });

    this.setState({
      todos: todos,
    });
  }

  checkAllToggled() {
    let count = 0;
    this.state.todos.forEach((item, idx) => {
      if (item.completed) count++
    });

    this.setState({
      allToggled: count === this.state.todos.length
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
          hidden={item.hidden}
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
                allToggled={this.state.allToggled}
                setAllItems={() => this.setAllItems()}
                setCompletedItems={() => this.setCompletedItems()}
                setActiveItems={() => this.setActiveItems()}
                itemsLeft={itemsLeft}
                todos={items}
                completed={this.state.areCompleted}
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
