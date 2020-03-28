import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiTrash2 } from 'react-icons/fi'
import api from '../../services/api'
import './styles.css'

export default function TodoList() {
    const [ todos, setTodos ] = useState([])

    useEffect(() => {
        async function loadTodo() {
            const response = await api.get('/todos');

            setTodos(response.data)
        }
        loadTodo();
    }, []
    )
  async function handleCompleted(_id){
    try{     
   await api.put(`todos/${_id}`, { "completed" : true })
        }
    catch (e) {
        console.log(e)
    }
  }
    async function handleDeleteTodos(_id) {
        try {
           await api.delete(`todos/${_id}`)
  
           setTodos(todos.filter(todo => todo._id !== _id))
        } catch (error) {
           alert(`Erro ao deletar, tente novamente.`)
        }
     }

    
    return(
        <div className="todo-container">
         <header>
             <button>
            <Link className="button" to="/todos/new">Cadastrar novo caso</Link>
            </button>
         </header>

         <h1>Casos Cadastrados</h1>

         <ul>
            {todos.map(todo => (
               <li key={todo._id}>
                  <strong>DESCRIÇÃO:</strong>
                    <p>{todo.description}
                    </p>
                    <span>Concluido: </span>
                   <input type="checkbox" onChange={() => handleCompleted(todo._id)}/>
                  <button onClick={() => handleDeleteTodos(todo._id)} type="button">
                     <FiTrash2 size={20} color="#a8a8b3" />
                  </button>
               </li>
            ))}
         </ul>
      </div>
    )
}