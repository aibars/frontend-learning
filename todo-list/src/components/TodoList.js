import React from 'react';
import Footer from './Footer';

const TodoList = props => {
    if (props.items.length === 0) return null;
    return (
        <div>
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all"></label>
                <ul className="todo-list">
                    {props.items}
                </ul>
            </section>
            <Footer count={props.items.length} />
        </div>
    );
}

export default TodoList;