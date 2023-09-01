import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import AddForm from './component/AddForm';
import ToDoItems from './component/ToDoItems';
import './App.css';

const App = () => {
  //we always put usestate in parent page then passs propc to all children
//useState([]) is array of object to stall all data on all to do list
  const[toDoList, settoDoList] = useState([
    //after build form we remove this value after
// {text: "Buy sugar", id: 11},
// {text: "Buy tuna", id: 12}
  ])

  //this function below add text-take propc from child to parent from addform.js to app.js
  //we need addTask function to addfrom.ja line 28

  //add task take info from user and add to the old one-- update it 
  const addTask =(userInput)=>{
    const newValue = {text: userInput.text, id: Math.floor(Math.random()*10),price:userInput.price}
    //settodo add new value to it
    settoDoList((toDoList)=>[ ...toDoList,newValue])
  
  }


  return (
    <div className='container customContainer'>
    
      <div className='row mb-1 ms-1 me-1 mt-3'>
        <br/>
        <AddForm keyAddTask={addTask}/>
      </div>
      <div className='row mb-3 ms-1 me-1 mt-3'>
        <ToDoItems keytoDoList={toDoList}/>
      </div>
    </div>
  )
}

export default App