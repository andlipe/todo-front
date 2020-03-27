import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
  
    return(
        <div className="todo-container">
         <header>
             <button>
            <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
            </button>
         </header>

         <h1>Casos Cadastrados</h1>

         <ul>
            {todos.map(todo => (
               <li key={todo._id}>
                  <strong>DESCRIÇÃO:</strong>
                  <p>{todo.description}</p>
               </li>
            ))}
         </ul>
      </div>
    )
}