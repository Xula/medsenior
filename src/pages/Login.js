import React, { useState } from 'react'
import './Login.css'
import logo from '../assets/medsenior.png'

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
            <img src={logo} alt="logo" className="logo"></img>
            <form onSubmit={handleSubmit} className="login-form">
                <h1>Entrar</h1>
                <input type="email" placeholder="Email"></input>
                <input  type={hidden ? 'password' : 'text'} placeholder="Senha"></input>
                <button onClick={togglePassword} className="showHide">Mostrar/Esconder senha</button>
                <p>Não possui conta ainda? <a href="/register"><strong>Registre-se aqui</strong></a></p>
                <button className="login-button">Entrar</button>
            </form>
        </div>
    )
}