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
// 1.state kept in parent component
//2. put function on the same page that state that we focus
//3.add task function take value from input text and move it to our array

//remove to do list function--we filter by id to remove item from array(todolist)



// simple example of removeFunction--
// if 1 not equal to 3 so true so we keep it
// run until if 3 not equal to 3 is false so remove it


// const originalArray = [1, 2, 3, 4, 5];
// const elementToFilter = 3;

// const filteredArray = originalArray.filter(x => x !== elementToFilter);

// console.log(filteredArray); // Output: [1, 2, 4, 5]


  return (
    <div className='container customContainer'>
    
      <div className='row mb-1 ms-1 me-1 mt-3'>
        <br/>
        <AddForm keyAddTask={addTask}/>
      </div>
      <div className='row mb-3 ms-1 me-1 mt-3'>
        <ToDoItems keytoDoList={toDoList} keysettoDoList ={settoDoList}/>
        {/* we pass these function to toDoItem.js --pass props to child */}
      </div>
      
    </div>
  )
}

export default App