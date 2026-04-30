import { useState } from 'react'
import './App.css'
import QueueForm from './components/QueueForm'

export default function App(){

  const [queue,setQueue]=useState([])

  const addToQueue = (customer)=>{
    // add data to Queue
    setQueue([...queue,{...customer,id:Date.now(),status:"waiting"}])
  }

  const updateStatus = (customer)=>{
    // change data in Queue
  }

  const removeFromQueue = (customer)=>{
    // remove data from  Queue
  }

  return (
    <>
    <div className="app">
    <header>
      <h1>Queue Management System</h1>
      <p>Manage your customers efficiently</p>
    </header>
    <main>
      <QueueForm onAdd={addToQueue}/>
      <h1>Display Form</h1>
    </main>
    </div>
    </>
  )
}