import React from 'react';
import classNames from 'classnames';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hoverState: false,
        };

        this.toggleHover = this.toggleHover.bind(this);
        this.checkHandler = this.checkHandler.bind(this);
        this.destroyHandler = this.destroyHandler.bind(this);
    }

    toggleHover() {
        this.setState({ hoverState: !this.state.hoverState });
    }

    checkHandler() {
        this.props.onCheck(this.props.todo);
    }

    destroyHandler() {
        this.props.removeItem(this.props.todo);
    }

    render() {
        return (
            <li
                className={classNames({ completed: this.props.todo.completed })}
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}>
                <div className="view" >
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={this.props.todo.completed}
                        onChange={this.checkHandler}
                    />
                    <label>{this.props.todo.text}</label>
                    <button
                        onClick={this.destroyHandler}
                        className="destroy">x</button>
                </div>
            </li>
        );
    }
}

export default TodoItem;