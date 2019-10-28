import React from 'react';
import '../styles/TodoInput.css';
import TodoItem from './TodoItem';
import TodoList from './TodoList';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            todos: [],
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

    onCheck(item) {
        const todos = this.state.todos;

        todos[item.id].completed = !todos[item.id].completed;
        this.setState({
            todos: todos,
        });
    }

    toggleAll() {
        const todos = this.state.todos;

        this.state.todos.forEach((item, index) => {
            item.completed = true;
        });

        this.setState({
            todos: todos,
        })
    }

    removeItem(item) {
        const todos = this.state.todos;

        var list = todos.filter((value, index, arr) => {
            return value.id !== item.id;
        });

        this.setState({
            todos: list,
        });
    }

    render() {
        const items = this.state.todos.map((item, i) => {
            return (
                <TodoItem key={item.id}
                    todo={item}
                    onCheck={(item) => this.onCheck(item)}
                    removeItem={(item) => this.removeItem(item)} />
            );
        });

        return (
            <div>
                <input className="new-todo"
                    ref={(input) => { this.nameInput = input; }}
                    type="text"
                    placeholder="What needs to be done?" value={this.state.value}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                ></input>
                <TodoList
                    items={items}
                    toggleAll={() => this.toggleAll()} />
            </div>
        );
    }
}

export default TodoInput;