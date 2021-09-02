import React, { Component } from 'react';
import ListItem from '../todo-list-item';

import './index.css'




const List = ({ data, onDeleted, onDone, onImportant }) => {

    const elements = data.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id}>
                <ListItem {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onDone={() => onDone(id)}
                    onImportant={() => onImportant(id)} />
            </li>
        )
    });


    return (
        <div className="todo-list-ul">
            <ul>
                {elements}
            </ul>
        </div>
    )
}


export default List;