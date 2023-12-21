import React from 'react'
import { useState } from 'react';
import { FaTrashCan } from "react-icons/fa6";

export const Content = () => {
   const [items, setItems] = useState([
    {id:1,
      checked: true,
      product: "practice coding"
   },
   {id:2,
      checked: false,
      product: "understand concept"
   },
   {id:3,
      checked: true,
      product: "prepare interview q&a"
   },
  ])
  const handleChange = (id) =>{
    const listItems = items.map ((item) =>
    item.id ===id? {...item,checked:!item.checked}: item)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const handleDelete = (id) =>{
    const listItems = items.filter ((item) =>
    item.id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }
  return (
    <main>
      {(items.length)?(
      <ul>
        {items.map((item) =>(
        <li className='item' key={item.id}>
            <input 
            type = "checkbox"
            onChange={() =>handleChange(item.id)}
            checked = {item.checked}/>
            <label
            style ={(item.checked)?{textDecoration:"line-through"}: null}
            onDoubleClick={() =>handleChange(item.id)}
            >{item.product}</label>
            <FaTrashCan
            role = "button"
            onClick={( )=> handleDelete(item.id)}
            tabIndex = "0" />
          
        </li>
        ))}
      </ul>):<p>your list is empty</p>
}
        </main>
  )
}
