import React, { useState } from 'react'
import './Login.css'
import logo from '../assets/medsenior.png'
import firebase from '../firebase'

export default function Login({ history }){

    const [hidden, setHidden] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const db = firebase.firestore();
    const usersRef = db.collection('users');

    function togglePassword(e){
        e.preventDefault();
        setHidden(!hidden);
    }

    async function handleSubmit(e){
        e.preventDefault()
        if(email !== '' && password !== ''){
            usersRef.where('email', '==', email).where('password', '==', password).get()
                .then(snapshot => {
                    if(snapshot.empty){
                        alert('Usuário ou senha incorretos!');
                        return;
                    }
                    // login successful
                    history.push('/home');
                }).catch(e => {
                    console.log('Erro ao buscar usuários', e);
                })
        }
    }

    return (
        <div className="login-container">
            <img src={logo} alt="logo" className="logo"></img>
            <form onSubmit={handleSubmit} className="login-form">
                <h1>Entrar</h1>
                <input type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}></input>
                <input  type={hidden ? 'password' : 'text'} placeholder="Senha" onChange={(e) => {setPassword(e.target.value)}}></input>
                <button onClick={togglePassword} className="showHide">Mostrar/Esconder senha</button>
                <p>Não possui conta ainda? <a href="/register"><strong>Registre-se aqui</strong></a></p>
                <button className="login-button">Entrar</button>
            </form>
        </div>
    )
}