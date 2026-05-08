import {useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {

  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [characterAllowed,setCharacterAllowed] = useState(false)
  const [password,setPassword] = useState('')

  // useRef
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    }
    if(characterAllowed){
      str += "!@#$%^&*()_+"
    }
    for(let i=0;i<length;i++){
      let char = Math.floor( Math.random() * str.length + 1 )
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,characterAllowed,setPassword])

  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,setPassword])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg m-8 px-4 py-6 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3"> Password Generator </h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4" >
            <input type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly={true}
            ref={passwordRef}
            />
          <button onClick={copyPasswordToClipBoard} className="bg-orange-500 text-white py-1 px-3">copy</button>
        </div>
        <div className="flex gap-x-2 text-sm">
          <div className="flex items-center gap-x-1">
            <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>setLength(e.target.value)}
            />
            <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
            type="checkbox"
            defaultChecked={false}
            id="numberAllowed"
            onChange={()=>setNumberAllowed((prev) => !prev)}
            />
          </div>
          <label htmlFor="numberAllowed">Number</label>
          <div className="flex items-center gap-x-2">
            <input
                type="checkbox"
                defaultChecked={false}
                id="characterAllowed"
                onChange={()=>setCharacterAllowed((prev) => !prev)}
            />
          </div>
          <label htmlFor="characterAllowed">Character</label>
        </div>
      </div>
    </>
  )
}

export default App
