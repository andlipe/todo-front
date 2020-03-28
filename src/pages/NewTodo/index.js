import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'


export default function Register() {
   const [description, setDescription] = useState('')

   const history = useHistory()


   async function handleNewIncident(e) {
      e.preventDefault()

      const data = {
         description,
      }

      try {
         await api.post('todos', data)

         history.push('/')
      } catch(error) {
         alert('Erro ao cadastrar tarefa, tente novamente.')
      }
   }

   return (
      <div className="new-todo-container">
         <div className="content">
            <section>

               <h1>Cadastrar nova tarefa</h1>
               <p>Descreva o tarefa detalhadamente para se organizar melhor.</p>

               <Link className="back-link" to="/">
                  <FiArrowLeft size={16} />
                  Voltar para home
               </Link>            
            </section>

            <form onSubmit={handleNewIncident}>
               <textarea 
                  placeholder="Descrição" 
                  value={description}
                  onChange={e => setDescription(e.target.value)}
               />

               
               <button className="button" type="submit">Cadastrar</button>
            </form>
         </div>
      </div>
   )
}