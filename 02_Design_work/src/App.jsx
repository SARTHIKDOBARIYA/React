
import './App.css'
import Card from './components/card'
import Header from './components/Header'
import Hero from './components/Hero'
import { Button } from "./components/ui/button"

function App() {

  return (
    <>
    <Header />
    {/* <Hero /> */}
    <div className='flex gap-4'>
    <Card title="Nodejs" buttonText = "Node"/>
    <Card title="Reactjs" buttonText='React'/>
    <Card title="Nextjs" buttonText='Next'/>
    <Button />
    </div>
    </>
  )
}

export default App
