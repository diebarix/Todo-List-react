import { useState } from 'react'
import Todo from './todo'
import './todoCreate.css'

function App() {

  const [title, setTitle] = useState("")
  const [todo, setTodo] = useState([])

  function handleChange(e) {
    const value = e.target.value
    setTitle(value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newTask = {
      title: title,
      id: crypto.randomUUID(),
      completed: false
    } 

    setTodo([...todo, newTask])

    setTitle("")
  }

  function handleUpdate(id, value) {
    const temp = [...todo]
    const task = temp.find(task => task.id == id)
    task.title = value
    setTodo(temp)
  }

  function handleDelete(id) {
    const temp = todo.filter(task => task.id != id)
    setTodo(temp)
  }

  return (
    <div className='container'>

        <h1 className='todoTitleApp'>Todo List</h1>

        <div className='todoContainer'>
            <form className='formCotainerTodo' onSubmit={handleSubmit}>
          <h4 className='todoTitleTask'>Create a task</h4>
          <input
          className='todoInputTitle'
          value={title}
          onChange={handleChange}
          type="text"
          />
          <input 
          className='todoSubmit'
          onClick={handleSubmit} 
          type="submit" />
          </form>
            </div>
          <div className='todosItemsContainer'>
          <div className='todosItems'>
          {
            todo.map(task => (
              <Todo key={task.id} task={task} update={handleUpdate} onDelete={handleDelete} />
            ))
          }
          </div>
          </div>
      </div>
  )
}

export default App
