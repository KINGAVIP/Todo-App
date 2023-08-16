import axios from 'axios'
const APP_URL="http://localhost:8000/api/todo/"

async function createTodo(task)
{
    const {data:newTodo}=await axios.post(APP_URL+"create",{task})
    return newTodo
}
async function  deleteTodo(id)
{
    const Del_url=APP_URL+'delete/'
    const message=await axios.delete(`${Del_url}${id}`)
    return message
}
async function updateTodo(id,payload)
{
    const Update_url=APP_URL+'update/'
    const {data:newTodo}=await axios.put(`${Update_url}${id}`,payload)
    return newTodo
}
async function getAllTodo()
{
    const {data:todos}=await axios.get(APP_URL+'display')
    return todos;
}

export default {createTodo,deleteTodo,updateTodo,getAllTodo}