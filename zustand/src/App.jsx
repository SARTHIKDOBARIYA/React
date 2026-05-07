import { useState } from 'react'
import './App.css'
import Counter from "./components/counter.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Zustand</h1>
      <Counter/>
    </>
  )
}

export default App
