import React from 'react'

const ToDoItems = ({keytoDoList,keysettoDoList}) => {

    const removeToDoItem = (id)=>{
        const newTodo = keytoDoList.filter((val)=>val.id !== id)
        keysettoDoList(()=>newTodo)
        // console.log(newTodo)
        
        }

// const handleDeleteButton=(id)=>{
// keyremoveToDoItem(id)
// }

  return (
 <ul className='mt-3'>
    <b className='ms-3'>Items:</b>
    {
        // we use map to loop in all keytodolist and extract id and text
        keytoDoList.map((todolist)=>{
            return(
                // key={} is very important track every element on the dom
                <div className='px-2 mt-1 mb-1 ms-2' key={todolist.id}>
      {todolist.text}:{todolist.price}   
             <button onClick={removeToDoItem(todolist.id)}>Delete</button>       
                </div>
            )
        })
    }
 </ul>
  )
}

export default ToDoItems