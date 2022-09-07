import React, { useState } from 'react';
import NumberList from './NumberList';

function App() {
  let [data, setData] = useState([]);

  function display() {
    let todo = document.getElementById('todoText');
    let oldData = [...data];
    oldData.splice(0, 0, todo.value);
    setData(oldData);
    todo.value = "";

  }
  let deleteItem=(index)=>{
    let oldData = [...data];
    oldData.splice(index, 1);
    setData(oldData);
  }

  
  return (
    <div className='container'>
      <h1>Todo List In React</h1>
      <input type="text" id="todoText" className='form-control' placeholder='Enter your task here'/> 
      <button onClick={display} className='btn btn-success my-2 '>Add Task</button>

      <NumberList data={data} deleteItem={deleteItem} />

    </div>

  );
}

export default App;
