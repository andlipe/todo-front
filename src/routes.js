import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TodoList from './pages/TodoList'
import './global.css'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={TodoList} />
            </Switch>
        </BrowserRouter>
    )
}