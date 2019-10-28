import React from 'react';
import Footer from './Footer';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.toggleAll = this.toggleAll.bind(this);
        this.state = { completed: false }
    }

    toggleAll() {
        this.props.toggleAll();
    }

    onCheck() {
        let completed = this.props.todos.some((item) => {
            return item.completed;
        });

        this.setState({ completed: completed });
    }

    render() {
        if (this.props.items.length === 0) return null;
        return (
            <div>
                <section className="main">
                    <input onClick={this.toggleAll}
                        id="toggle-all"
                        className="toggle-all"
                        type="checkbox" />
                    <label htmlFor="toggle-all"></label>
                    <ul className="todo-list">
                        {this.props.items}
                    </ul>
                </section>
                <Footer todos={this.props.items} completed={this.state.completed} />
            </div>
        );
    }
}

export default TodoList;