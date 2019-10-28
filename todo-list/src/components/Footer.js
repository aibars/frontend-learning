import React from 'react';
import '../styles/Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.clearCompleted = this.clearCompleted.bind(this);
    }

    clearCompleted() {
        this.props.clearCompleted();
    }

    render() {
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{this.props.itemsLeft}</strong>
                    <span> </span>
                    <span> items</span>
                    <span> left</span>
                </span>
                <ul className="filters">
                    <li>
                        <a href="/" className="selected">All</a>
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
                {this.props.completed && <button
                    className="clear-completed"
                    onClick={this.clearCompleted}>Clear Completed</button>}
            </footer>
        );
    }
}

export default Footer;