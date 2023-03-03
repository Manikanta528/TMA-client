import React, { useState, useEffect } from 'react';

import { MdDeleteForever } from 'react-icons/md'

import '../styles/Task.css';
import NavBar from './NavBar';

const Task = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [newItemText, setNewItemText] = useState('');
  //console.log(todoItems.length);
  const handleAddClick = () => {
    if(newItemText === "") {
      alert("Please enter a task");
      return;
    }
    let nt = { text: newItemText, completed: false }
    let newTasks = [...todoItems, nt];
    fetch('http://localhost:5001/api/task', {
      method: 'POST',
      body: JSON.stringify({"email":localStorage.getItem("email"),"task":newTasks}),
      headers: { 'Content-Type': 'application/json' },
    });
    setTodoItems(newTasks);
    setNewItemText('');
  };

  const handleDeleteClick = index => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    let user = localStorage.getItem("email");
    fetch("http://localhost:5001/api/task/"+user, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"email":localStorage.getItem("email"),"task": newTodoItems})
    })
    setTodoItems(newTodoItems);
  };

  const handleCheckboxClick = index => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].completed = !newTodoItems[index].completed;
    let user = localStorage.getItem("email");
    fetch("http://localhost:5001/api/task/"+user, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"email":localStorage.getItem("email"),"task": newTodoItems})
    })
    setTodoItems(newTodoItems);
  };
  useEffect(() => {
    let user = localStorage.getItem("email");
    fetch('http://localhost:5001/api/task/'+user, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      //console.log(response.json());
      return response.json();
    }).then((data) => {
      //console.log(data.data[0].task);
      setTodoItems(data.data[0].task);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <>
    <NavBar index="1"/>
    <div className="todo-list-container">
      <div className="new-item-container">
        <input
          type="text"
          value={newItemText}
          style={{"border":"2px solid #000"}}
          onChange={event => setNewItemText(event.target.value)}
          placeholder="Add a new Task"
        />
        <button onClick={handleAddClick}>Add Task</button>
      </div>
      <div style={{"margin" :"16px 4px"}}>Tasks :</div>
      { todoItems.length === 0 ?
      <div>
      <div className='task-empty'></div>
      <center>Add Tasks to the list.</center>
      </div>
      :
      <ul className="todo-items-container">
        {todoItems.map((item, index) => (
            <div className='task-list'>
          <li
            key={index}
            className ={`todo-item ${item.completed ? 'completed' : ''}`}
            onClick={() => handleCheckboxClick(index)}
          >
            {item.text} 
          </li>
          <button className="todo-del-btn" onClick={() => handleDeleteClick(index)}> <MdDeleteForever className='md-delete'/> </button>
          </div>
        ))}
      </ul>}
    </div>
    </>
  );
};

export default Task;
