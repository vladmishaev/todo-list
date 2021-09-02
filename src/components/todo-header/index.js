import React, { Component } from 'react';

import './index.css';



const Header = ({ toDo, done }) => {
    return (
        <div className="todo-header-div">
            <h1>Todo-Application</h1>
            <div>
                <p>{toDo} more to do,{done} done</p>
            </div>
        </div>
    )
}



export default Header;