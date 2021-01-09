import React, {useContext, useEffect, useState} from 'react';
import {toaster} from 'evergreen-ui';

const ToDoContext = React.createContext();

export function ToDoList() {
    return useContext(ToDoContext)
}

export function ToDoProvider({ children }) {

    const [inputText, setInputText] = useState('');
    const [toDo, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredToDos, setFilteredToDos] = useState([]);

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const filterHandler = () => {
        switch(status) {
            case 'completed':
                setFilteredToDos(toDo.filter(todo => todo.completed === true))
                break;
            case 'uncompleted':
                setFilteredToDos(toDo.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredToDos(toDo);
                break;

        }
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    const completeHandler = (id) => {
    
       setTodos(toDo.map(item => {
           if(item.id === id) {
                toaster.success('Great job! Keep finishing up these tasks!')
               return {
                   ...item, completed: !item.completed
               }
           }
           return item;
           
       }))
       
    }

    const trashHandler = (removeId) => {
        setTodos(toDo.filter((el) => el.id !== removeId))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...toDo, {text: inputText, completed: false, id: Math.random() *1000}
        ])
        setInputText('')
        
    } 

    const saveLocalTodos = () => {
            localStorage.setItem('todos', JSON.stringify(toDo))
    }

    const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null ) {
            localStorage.setItem('todos', JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'))
            setTodos(todoLocal)
        }
    }
    //Run once when the app starts
    useEffect(() => {
        getLocalTodos();
    }, [])
   
    
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [toDo, status])
    
    const value = {
        toDo,
        inputText,
        submitHandler, 
        inputTextHandler, 
        trashHandler,
        completeHandler,
        status, 
        setStatus,
        statusHandler,
        filterHandler,
        filteredToDos
    }

    return (
        <ToDoContext.Provider value={value}>
            {children}
        </ToDoContext.Provider>
    )

}