import React, { Component } from 'react';
import './index.css';

const AddListItem = ({ addFunc }) => {
    let text;
    const getTextTask = (event) => {
        const titleTask = text = event.target.value;
        if (+titleTask === 0) {
            text = false;
        } else {
            text = titleTask;
        }


    }
    return (
        <div className="todo-list-add-item-div">
            <input type="text" placeholder="Enter your task" onInput={getTextTask} />
            <button onClick={() => addFunc(text)}>Add your task</button>
        </div>
    );
}

export default AddListItem;