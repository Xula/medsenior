import React, { useState } from 'react'
import './Login.css'
import logo from '../assets/medsenior.png'
import { FaEye } from 'react-icons/fa'

export default function Login(){

    const [hidden, setHidden] = useState(true);

    function togglePassword(e){
        e.preventDefault();
        setHidden(!hidden);
    }

    async function handleSubmit(e){

    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="logo"></img>
                <p>Entrar</p>
                <input type="email" placeholder="Email"></input>
                <input  type={hidden ? 'password' : 'text'} placeholder="Senha"></input>
                <button onClick={togglePassword}><FaEye /></button>
                <p>Não possui conta ainda?<a href="/register">Registre-se aqui</a></p>
                <button>Entrar</button>
            </form>
        </div>
    )
}