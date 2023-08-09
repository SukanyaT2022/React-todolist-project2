import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const AddForm = ({keyAddTask}) => {
    //this use state to hold input value
    const[inputValue, setInputValue]= useState("")
  
    const handleAddTask =()=>{
      keyAddTask(inputValue)
      
    }
  return (
    // button send all data that user typing to usestatein App.js
    <div className='container d-flex'>
<div className='mt-3 mx-5'>
    {/* below onchange do change value and install inside value */}
<input type="text" onChange={(e)=> setInputValue(e.target.value)} value={inputValue} />
</div>
<div className='ml-5'>
    <Button onClick={handleAddTask}>Add Items</Button>
</div>

    </div>
  )
}

export default AddForm