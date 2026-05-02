import { useState } from "react"
import {FaUserPlus} from'react-icons/fa'
import '../App.css'

export default function QueueForm({onAdd}){
    

    const [name,setName] = useState('')
    const [service ,setService ] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()

        // validation
        if(!name.trim() || !service.trim()) return
        onAdd({name,service})
        setName('')
        setService('')
    }
    return (
        <>
        <form className="queue-form" onSubmit={handleSubmit}>
            <h1>Add to Queue</h1>
            <div className="form-group">
                <input 
                placeholder="customer name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <select value={service} onChange={(e)=>setService(e.target.value)}>
                    <option value="">Select Service</option>
                    <option value="consulation">consulation</option>
                    <option value="payment">payment</option>
                    <option value="support">support</option>
                </select>
            </div>
            <div>
                <button type="submit">
                    <FaUserPlus/>Add Customer</button>
            </div>
        </form>
        </>
    )
}