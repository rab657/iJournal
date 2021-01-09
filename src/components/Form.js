import React from 'react';
import {ToDoList} from '../contexts/ToDoContext';

function Form() {

    const {inputText, inputTextHandler, submitHandler, statusHandler} = ToDoList();

    return (
       <form>
           <input value={inputText} type='text' className='todo-input' onChange={inputTextHandler} />
           <button className='todo-button' type='submit' onClick={submitHandler}>
               <i className="fas fa-plus-square"></i>
           </button>
           <div className='select'>
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
           </div>
       </form>
    );
}

export default Form;