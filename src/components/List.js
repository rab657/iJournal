import React, { useEffect } from 'react';
import {ToDoList} from '../contexts/ToDoContext';
import Todo from './Todo';


function List() {

    const {toDo, filteredToDos} = ToDoList();

    useEffect(() =>{
    }, [toDo])

    return (
        <div className='todo-container'>
            <ul className="todo-list">
                {filteredToDos.map(item => (
                    <Todo text={item.text} key={item.id} id={item.id} item={item}/>
                ))}
             
            </ul>
        </div>
    );
}

export default List;