import React, { useState } from "react";
import Cards from "./Cards";

function Forms() {
  const [text, setText] = useState({});
  const [data, setData] = useState([]);


  function deleteCard(id){
    setData((prevData)=>{
       return prevData.filter((item,index)=>{
            return index!==id
        })
    });

  }

  function onChangeHandler(event) {
    const { value, name } = event.target;
    setText((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setData((prevValue) => [...prevValue, text]);
    setText({}); // Clear input fields after adding a note
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
{/* input field */}

      <div className="inputField">
        <input
          type="text"
          placeholder="Title"
          name="Title"
          value={text.Title || ""}
          onChange={onChangeHandler}
        /><br/>
        <input
          type="text"
          placeholder="write your thing ?....."
          name="note"
          value={text.note || ""}
          onChange={onChangeHandler}
        />
        
         <button type="submit">Add</button>
        </div>

       
      </form>
    
        {data.map((item, index) => (
          <Cards key={index} index={index} title={item.Title} note={item.note} deleteCard={deleteCard} />
        ))}
      
    </>
  );
}

export default Forms;
