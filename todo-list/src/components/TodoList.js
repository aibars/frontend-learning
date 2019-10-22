import React from 'react';
import '../styles/TodoList.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            todos: [],
            hoverState: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }

    componentDidMount() {
        this.nameInput.focus();
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleKeyDown(e) {
        if (e.key === 'Enter' && this.state.value !== '') {
            let list = this.state.todos.concat(this.state.value);

            this.setState({
                todos: list,
                value: '',
            });
        }
    }

    onMouseEnter() {
        this.setState({ hoverState: true });
    }
    onMouseOut() {
        this.setState({ hoverState: false });
    }

    render() {
        const items = this.state.todos.map((text, i) => {
            return (
                <li key={i} onMouseEnter={this.onMouseEnter} onMouseOut={this.onMouseOut}>
                    <div className="view" >
                        <input className="toggle" type="checkbox" />
                        <label>{text}</label>
                        {this.state.hoverState && <button className="destroy"></button>}
                    </div>
                </li>
            );
        });
        const count = this.state.todos.length;
        return (
            <div>
                <input className="new-todo"
                    ref={(input) => { this.nameInput = input; }}
                    type="text"
                    placeholder="What needs to be done?" value={this.state.value}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                ></input>
                {count > 0 && <section className="main">
                    <input id="toggle-all" className="toggle-all" type="checkbox" />
                    <label htmlFor="toggle-all"></label>
                    <ul className="todo-list">
                        {items}
                    </ul>
                </section>}
                {count > 0 && <TodoCount count={count} />}
            </div>
        )
    }
}

const TodoCount = props => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{props.count}</strong>
                <span> </span>
                <span> items</span>
                <span> left</span>
            </span>
            <ul className="filters">
                <li>
                    <a href="#/" className="selected">All</a>
                </li>
                <span> </span>
                <li>
                    <a href="#/active">Active</a>
                </li>
                <span> </span>
                <li>
                    <a href="#/completed">Completed</a>
                </li>
            </ul>
            <button className="clear-completed">Clear completed</button>
        </footer>
    );
};

export default TodoList;