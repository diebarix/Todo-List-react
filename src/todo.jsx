import React, { useState } from 'react'
import "./todos.css"

function Todo({task, update, onDelete }) {

    const [edit, setEdit] = useState(false)

    function FormEdit() {

        const [newValue, setNewValue] = useState(task.title)
        
        const handleSubmit = e => {
            e.preventDefault()
        }
        function handleChange(e) {
            const value = e.target.value
            setNewValue(value)
        }

        function handleUpdateClick(e) {
            e.preventDefault()
            update(task.id, newValue)
            setEdit(false)
        }


        return (
                <form onSubmit={handleSubmit}>
                    <input 
                    className='editingNewValue'
                    onChange={handleChange} 
                    type="text" 
                    value={newValue} />
                    <button 
                    className='editingButtonUpdate'
                    onClick={handleUpdateClick} >Update</button>

                </form>
            )
        }
        
    function TaskElement() {
        return(
            <div className='editContainer'>
                <div className='editTitle'>
                    <h4 className='editTitleTask'>{task.title}</h4>
                </div>
                <div className='editTodo'>
                    <button className='editButtonTask' onClick={ () => setEdit(true)}>Edit</button>
                    <button className='editDeleteTask' onClick={ () => onDelete(task.id)} >Delete</button>
                </div>

            </div>
        )
    }

  return (
    <div className='newTodosContainer'>
        <div className='newTodos'>
            {
            edit
            ? <FormEdit />
            : <TaskElement/>
            }
        </div>
    </div>
  )
}

export default Todo