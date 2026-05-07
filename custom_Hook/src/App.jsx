import './App.css'
import { useCart } from './hooks/useCart.js';
import {products} from "./data/Product.js";
import ProductCard from "./components/ProductCard.jsx";
import Cart from "./components/Cart.jsx";

function App() {

    const {cart , addToCart , removeFromCart , total , updateQuantity} = useCart();

  return (
    <>
      <div className="app">
          <header>
              <h1>Shopping cart</h1>
          </header>
          <main className="products">
              <section>
                { products.map((product) => (
                  <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  />
              ))}
              </section>
              <Cart
              cart={cart}
              onUpdateQuantity={updateQuantity}
              total={total}
              onRemove={removeFromCart}
              />
          </main>
      </div>

    </>
  )
}

export default App
