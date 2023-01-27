import React, { useState } from 'react';

import { MdDeleteForever } from 'react-icons/md'

import './Task.css';

const Task = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [newItemText, setNewItemText] = useState('');
  console.log(todoItems.length);
  const handleAddClick = () => {
    if(newItemText == "") return;
    setTodoItems([...todoItems, { text: newItemText, completed: false }]);
    setNewItemText('');
  };

  const handleDeleteClick = index => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  const handleCheckboxClick = index => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].completed = !newTodoItems[index].completed;
    setTodoItems(newTodoItems);
  };

  return (
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
  );
};

export default Task;
