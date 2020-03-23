import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" component={Login} exact></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/home" component={Home}></Route>
        </BrowserRouter>
    )
}