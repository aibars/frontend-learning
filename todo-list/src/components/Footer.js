import React from 'react';
import '../styles/Footer.css';

class Footer extends React.Component {
    render() {
        let count = this.props.todos.length
        if (count === 0) return null;
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{count}</strong>
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
                {this.props.completed && <button className="clear-completed">Clear Completed</button> }
            </footer>
        );
    }
};

export default Footer;