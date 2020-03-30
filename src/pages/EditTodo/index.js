import React, { useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'


export default function EditTodo() {
   const [description, setDescription] = useState('')
  
    let _id  = useParams()
   const history = useHistory()

   async function handleEditDescription(e) {
      e.preventDefault()

      const data = {
         description,
      }

      try {
         await api.patch(`todos/${_id.id}`, data)

         history.push('/')
      } catch(error) {
         alert('Erro ao editar tarefa, tente novamente.')
      }
   }

   return (
      <div className="edit-todo-container">
         <div className="content">
            <section>

               <h1>Editar tarefa</h1>
               <p>Descreva o tarefa detalhadamente para se organizar melhor.</p>

               <Link className="back-link" to="/">
                  <FiArrowLeft size={16} />
                  Voltar para home
               </Link>            
            </section>

            <form onSubmit={handleEditDescription}>
               <textarea 
                  placeholder="Descrição" 
                  value={description}
                  onChange={e => setDescription(e.target.value)}
               />

               
               <button className="button" type="submit">Editar</button>
            </form>
         </div>
      </div>
   )
}