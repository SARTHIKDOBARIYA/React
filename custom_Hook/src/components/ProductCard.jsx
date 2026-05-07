import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

function productCard({product,onAddToCart}) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <button onClick={() => onAddToCart(product)}><FaShoppingCart/>Add to Cart
        <FaShoppingCart />
      </button>
    </div>

  )
}

export default productCard