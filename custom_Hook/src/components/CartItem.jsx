import { FaTrash , FaPlus , FaMinus } from "react-icons/fa";

import React from 'react'

function cartItem({item,onUpdateQuantity,onRemove}) {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>{item.price}</p>
      <div className="quantity-controls">
        <button onClick={()=>onUpdateQuantity(item.id , item.quantity-1)}>
          <FaMinus/>
        </button>
        <span>{item.quantity}</span>
        <button onClick={()=>onUpdateQuantity(item.id , item.quantity+1)}>
          <FaPlus/>
        </button>
      </div>
      <button className="remove-btn"
          onClick={()=>onRemove(item.id)}>
        <FaTrash/>
      </button>

    </div>
  )
}

export default cartItem