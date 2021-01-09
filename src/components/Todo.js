import React from 'react';
import {ToDoList} from '../contexts/ToDoContext';

const Todo = ({item, text, id}) => {

    const {trashHandler, completeHandler} = ToDoList();
    return (
       
            <div className="todo">
                <li className={`todo-item ${item.completed ? "completed" : ''}`}>{text}</li>
                <button className="complete-btn" onClick={completeHandler.bind(this, id)}>
                    <i className="fas fa-check"></i>
                </button>
                <button 
                className="trash-btn" 
                onClick={trashHandler.bind(this, id)}>
                    <i className="fas fa-trash"></i>
                </button>

            </div>
            
        
    );
}

export default Todo;