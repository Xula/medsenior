import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import './Register.css'
import logo from '../assets/medsenior.png'
import firebase from '../firebase'

export default function Register({ history }){

    const [hidden, setHidden] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [errors, setErrors] = useState([]);

    const db = firebase.firestore();
    const usersRef = db.collection('users');

    function togglePassword(e){
        e.preventDefault();
        setHidden(!hidden);
    }

    async function handleSubmit(e){
        e.preventDefault()
        let errors = [];
        if(!validateEmail(email)){
            errors.push('Email invalido!')
        }
        if(password !== confirm){
            errors.push('As senhas não são iguais!')
        }
        if(password.length < 6){
            errors.push('Sua senha deve ter pelo menos 6 caracteres!')
        }
        setErrors(errors);

        if(errors.length === 0){
            usersRef.doc().set({email: email, password: password});
            alert('Registro realizado com sucesso!');
            history.push('/login');

        }
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <div className="register-container">
            <img src={logo} alt="logo" className="logo"></img>
            <form onSubmit={handleSubmit} className="register-form">
                <h1>Novo registro</h1>
                <input type="email" placeholder="Email" onChange={ (e) => {setEmail(e.target.value)}}></input>
                <input type={hidden ? 'password' : 'text'} placeholder="Senha" onChange={ (e) => {setPassword(e.target.value)}}></input>
                <input type={hidden ? 'password' : 'text'} placeholder="Confirmar senha" onChange={ (e) => {setConfirm(e.target.value)}}></input>
                <button onClick={togglePassword} className="showHide">Mostrar/Esconder senha</button>
                <button className="register-button" onClick={handleSubmit}>Registrar-se</button>
            </form>
        <ul className="errors" style={errors.length === 0 ? {display: 'none'} : {display: 'block'}}>
            {errors.map(e => {
                return(
                    <li>{e}</li>
                )
            })
            }
        </ul>
        </div>
    )
}