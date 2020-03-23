import React, { useState } from 'react'
import './Login.css'
import logo from '../assets/medsenior.png'
import { FaEye } from 'react-icons/fa'

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
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="logo"></img>
                <p>Novo registro</p>
                <input type="email" placeholder="Email"></input>
                <input type={hidden ? 'password' : 'text'} placeholder="Senha"></input>
                <button onClick={togglePassword}><FaEye /></button>
                <input type="password" placeholder="Confirmar senha"></input>
                <button>Registrar-se</button>
            </form>
        </div>
    )
}