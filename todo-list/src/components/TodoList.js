import React from 'react';
import Footer from './Footer';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.toggleAll = this.toggleAll.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
    }
  
    toggleAll() {
        this.props.toggleAll();
    }

    clearCompleted() {
        this.props.clearCompleted();
    }

    render() {
        if (this.props.todos.length === 0) return null;
        return (
            <div>
                <section className="main">
                    <input onClick={this.toggleAll}
                        id="toggle-all"
                        className="toggle-all"
                        type="checkbox" />
                    <label htmlFor="toggle-all"></label>
                    <ul className="todo-list">
                        {this.props.todos}
                    </ul>
                </section>
                <Footer
                    itemsLeft={this.props.itemsLeft}
                    completed={this.props.completed}
                    clearCompleted={this.clearCompleted} />
            </div>
        );
    }
}

export default TodoList;