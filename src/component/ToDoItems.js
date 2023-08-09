import React from 'react'

const ToDoItems = ({keytoDoList}) => {
  return (
 <ul className='mt-3'>
    <b className='ms-3'>Items:</b>
    {
        // we use map to loop in all keytodolist and extract id and text
        keytoDoList.map(({id,text})=>{
            return(
                // key={} is very important track every element on the dom
                <li className='px-2 mt-1 mb-1 ms-2' key={id}>
                    {text}
                </li>
            )
        })
    }
 </ul>
  )
}

export default ToDoItems