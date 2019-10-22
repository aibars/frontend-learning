import React from 'react';
import classNames from 'classnames';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hoverState: false,
        };

        this.toggleHover = this.toggleHover.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }

    toggleHover() {
        this.setState({ hoverState: !this.state.hoverState });
    }

    onCheck(){
        this.props.onCheck(this.props.todo);
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
                        onChange={this.onCheck}
                    />
                    <label>{this.props.todo.text}</label>
                    {this.state.hoverState && <button className="destroy"></button>}
                </div>
            </li>
        );
    }
}

export default TodoItem;