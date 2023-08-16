import APIHelper from './APIHelper';
import './App.css';
import {useState,useEffect} from 'react'

function App() {
  const [todos,settodos]=useState([])
  const [todo,setTodo]=useState('')
  useEffect(()=>{
    const fetchTodos=async()=>{
      const todos=await APIHelper.getAllTodo()
      settodos(todos)
    }
    fetchTodos()
  },[todos])

  const createTodo=async e=>{
    e.preventDefault()
    if(!todo)
    {
      alert("Add task first")
      return
    }
    if(todos.Message.some(({task})=>task===todo))
    {
      alert('Already exists')
      return
    }
    const newTodo=await APIHelper.createTodo(todo)
    setTodo('')
    settodos([...todos.Message,newTodo])
  }
  const deletTodo=async(e,id)=>{
    try{
      console.log(id)
      e.stopPropagation()
      await APIHelper.deleteTodo(id)
      settodos(todos.Message.filter(({_id:i})=>id!==i))
    }
    catch(err)
    {
      console.log("Unable to delete"+err)
    }
  }
  const updateTodo=async (e,id)=>{
    e.stopPropagation()
    const payload={
      completed:!todos.Message.find(todo=>todo._id===id).completed,
    }
    const updateTodo=await APIHelper.updateTodo(id,payload)
    settodos(todos.Message.map(todo=>(todo._id===id?updateTodo:todo)))
  }
  return (
    <div className="App">
      <div>
          <h1>To do App</h1>
          <h2>By avi pruthi</h2>
          <div>
            <input id="todo-input" type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
            <button type="submit" onClick={createTodo}>Add</button>
          </div>
          <ul>
            {todos.Message?todos.Message.map(({_id,task,completed},i)=>{
              return(
              <li key={i} onClick={(e)=>updateTodo(e,_id)} className={completed?
              "completed":""}>
                {task}<span  onClick={e=>deletTodo(e,_id)}>X</span>
              </li>
              )
      }):null}
          </ul>
      </div>
    </div>
  );
}

export default App;
