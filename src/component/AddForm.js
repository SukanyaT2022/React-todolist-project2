import { background } from '@chakra-ui/react';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './Addform.css';


const AddForm = ({keyAddTask}) => {
    //this use state to hold input value
    const[inputValue, setInputValue]= useState('')
    const[inputPrice, setInputPrice] = useState("")
  
    const handleAddTask =()=>{
      keyAddTask({text:inputValue, price:inputPrice})
      setInputValue('')
      setInputPrice('')
    }
   
  return (
    // button send all data that user typing to usestatein App.js
    <div className='container d-flex flex-column'>
        <h2 className='text-center'>Expense Tracking</h2>
<div className='mt-3 mx-5 targetInput'>
    {/* below onchange do change value and install inside value */}
<input type="text" onChange={(e)=> setInputValue(e.target.value)} value={inputValue} placeholder='Items' />
</div>

{/* below price input */}
<div className='mt-3 mx-5 targetInput'>
    {/* below onchange do change value and install inside value */}
<input type="text" onChange={(e)=> setInputPrice(e.target.value)} value={inputPrice} placeholder='Price' />
</div>

<div className='ml-5 targetButton'>
    <Button onClick={handleAddTask}>Add Items</Button>
</div>

    </div>
  )
}

export default AddForm