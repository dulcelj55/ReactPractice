import React, { useState } from 'react'

const ListComponent = () => {
    const [items, setItems]= useState([]);
  return (
    <div>
         <button onClick={()=> setItems([...items, "I'm a new item!"])}>Add Item</button>
        <ul>
            {items.map((item, index)=> {
                <li key={index}>{item}</li>
            }
            )}
        </ul>
        
        
        
         </div>
  )
}

export default ListComponent