import React, { useState } from 'react'
import './Register.css'
import logo from '../assets/medsenior.png'

export default function Register(){

    const [hidden, setHidden] = useState(true);

    function togglePassword(e){
        e.preventDefault();
        setHidden(!hidden);
    }

    async function handleSubmit(e){

    }

    return (
        <div className="register-container">
            <img src={logo} alt="logo" className="logo"></img>
            <form onSubmit={handleSubmit} className="register-form">
                <h1>Novo registro</h1>
                <input type="email" placeholder="Email"></input>
                <input type={hidden ? 'password' : 'text'} placeholder="Senha"></input>
                <input type="password" placeholder="Confirmar senha"></input>
                <button onClick={togglePassword} className="showHide">Mostrar/Esconder senha</button>
                <button className="register-button">Registrar-se</button>
            </form>
        </div>
    )
}