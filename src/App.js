import React, { useState } from 'react'


const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value)
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("")

  }
  const deleteItems = (index) => {
    console.log(index);
    console.log(Items[index])
    var deleted = Items.filter((elem, inde) => {
      return inde !== index
    })
    setItems(deleted)

  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>ToDo List</h1>
          <div>
            <input type="" placeholder='Add a items ' value={inputList} onChange={itemEvent} />
            <button onClick={listOfItems}> + </button>
          </div>
          <ol>
            {/* <li>{inputList</li> */}


            {Items.map((itemval, index) => {
              return (
                <>
                  <li>{itemval} <button onClick={() => deleteItems(index)}>delete</button></li>
                </>
              )
            })}
          </ol>
        </div>
      </div>
    </>
  )
}
export default App;

