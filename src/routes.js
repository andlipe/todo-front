import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TodoList from './pages/TodoList'
import NewTodo from './pages/NewTodo'
import EditTodo from './pages/EditTodo'
import './global.css'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={TodoList} />
                <Route path='/todos/new' component={NewTodo} />
                <Route path='/todos/:id' component={EditTodo}/>
            </Switch>
        </BrowserRouter>
    )
}