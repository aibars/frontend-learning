import React from 'react';
import classNames from 'classnames';

let ESCAPE_KEY = 27;
let ENTER_KEY = 13;

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hoverState: false,
            editText: '',
        };

        this.toggleHover = this.toggleHover.bind(this);
        this.checkHandler = this.checkHandler.bind(this);
        this.destroyHandler = this.destroyHandler.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    handleEdit() {
        this.props.onEdit(this.props.todo);
        this.setState({ editText: this.props.todo.text });
    }

    handleChange() {

    }

    handleKeyDown(e) {
        if (e.which === ESCAPE_KEY) {
            this.setState({ editText: this.props.todo.title });
            this.props.onCancel(e);
        } else if (e.which === ENTER_KEY) {
            this.handleSubmit(e);
        }
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
                    <label
                        onDoubleClick={this.handleEdit}>{this.props.todo.text}</label>
                    <button
                        onClick={this.destroyHandler}
                        className="destroy">x</button>
                </div>
                <input
                    ref="editField"
                    className="edit"
                    value={this.state.editText}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
            </li>
        );
    }
}

export default TodoItem;