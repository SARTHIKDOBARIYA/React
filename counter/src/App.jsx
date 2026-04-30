import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [countToSet , setCountToSet] = useState(0)

  const incrementNumber = (count) => {
    // setCount(count + 1) // short hand
    // setCount(count + 1) // short hand
    // setCount(count + 1) // short hand
  }

  const incrementNumber2 = (count) => {
    setCount((prevCount) => prevCount + count + 1) // long hand
    setCount((prevCount) => prevCount + 1) // long hand
    setCount((prevCount) => prevCount + 1) // long hand
  }

  return (
    <>
    <h1>Counter</h1>
    <div className='card'>Counter is {count}</div>
    <div>
      <button onClick={() => setCount(count+1)} style={{margin: "0px 5px"}}>Increase</button>
      
      <button onClick={() => setCount((prev) => prev > 0 ? prev -1 : 0 )} style={{margin: "0px 5px"}}>Decrease</button>
      <button onClick={() => setCount(0)} style={{margin: "0px 5px"}}>Reset</button>
    </div>
    <div style={{margin:"10px 0px"}}>
        <input 
        style={{ 
          width: "100px",
          border:"1px solid white",
          margin: "0px 5px",
          padding: "0.6em 1.2em"
        }}
        value = {countToSet}
        onChange={(e)=> setCountToSet(Number(e.target.value))}   // here e is event and we are converting the value to number because by default it is string
        type='text'/>
        <button style={{margin:"0px 5px"}} onClick={() =>{
          setCount(countToSet)
          setCountToSet(0)
        }}>Set to {countToSet}</button>
    </div>
    </>
  )
}

export default App
