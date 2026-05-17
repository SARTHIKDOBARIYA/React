import './App.css'
import {useEffect, useState} from "react";
import {TodoProvider} from "./contexts/index.js";
import TodoForm from "./components/TodoForm.jsx";
import TodoItem from './components/TodoItem.jsx';

function App() {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos( (prev) =>[...prev,{id:Date.now(),todo:todo,completed:false}]);
    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id))
    }

    const updateTodo = (id,todo) => {
        setTodos( (prev) => prev.map((todo) => todo.id === id ? {...todo,todo:todo} : todo));
    }

    const toggleComplete = (id) => {
        setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo,completed:!todo.completed} : todo))
    }

    console.log(JSON.parse(localStorage.getItem("todos")))
    useEffect(()=>{
        const todos=JSON.parse(localStorage.getItem("todos"))
        console.log("===data===",todos)

        if(todos && todos.length > 0){
            setTodos(todos)
        }
    },[])

    useEffect(() => {
        const data = localStorage.setItem("todos",JSON.stringify(todos))
        console.log("===data===",data)
    }, [todos]);

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
        <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                <div className="mb-4">
                    <TodoForm />
                </div>
                <div className="flex flex-wrap gap-y-3">
                    {
                        todos.map((todo) => (
                            <div key={todo.id}>
                                <TodoItem todo={todo} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </TodoProvider>
  )
}

export default App
