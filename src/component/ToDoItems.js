import React from 'react';
import './ToDoItems.css';

const ToDoItems = ({ keytoDoList, keysettoDoList }) => {
  const removeToDoItem = (id) => {
    const newTodo = keytoDoList.filter((val) => val.id !== id);
    keysettoDoList(newTodo);
    // console.log(newTodo)
  };
  //if not eual id so save in new todo
  // simple example of removeFunction--
  // if 1 not equal to 3 so true so we keep it
  // run until if 3 not equal to 3 is false so remove it

  // const originalArray = [1, 2, 3, 4, 5];
  // const elementToFilter = 3;

  // const filteredArray = originalArray.filter(x => x !== elementToFilter);

  // console.log(filteredArray); // Output: [1, 2, 4, 5]

  // const handleDeleteButton=(id)=>{
  // keyremoveToDoItem(id)
  // }
// const sortToDoList = [...keysettoDoList]



const handleSort =()=>{
  const newArray =  keytoDoList.sort((a,b)=>b.price - a.price)
  keysettoDoList(newArray);
  console.log("heelo")
}

  return (
    <ul className="mt-3">
      <b className="ms-3">Items:<button onClick={handleSort}>Sort</button></b>
      {
        // we use map to loop in all keytodolist and extract id and text
        keytoDoList.map((todolist) => {
          return (
            // key={} is very important track every element on the dom
            <div className="px-2 mt-1 mb-1 ms-2" key={todolist.id}>
              <div className="wrap">
                <div className="nameItem">{todolist.text}</div>
                <div className="priceItem">{todolist.price}</div>
                <div className="deleteButton">
                  <button onClick={() => removeToDoItem(todolist.id)}>
                    Delete
                  </button>{' '}
                </div>
              </div>
            </div>
          );
        })
      }
    </ul>
  );
};

export default ToDoItems;
