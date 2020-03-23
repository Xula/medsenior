import React, { useEffect } from 'react'
import logo from '../assets/medsenior.png'
import axios from 'axios'

export default function Home(){

    useEffect(() => {
        async function getIP(){
            let res = await axios.get('http://meuip.com/api/meuip.php');
            let ip = res.data;
            console.log(ip);
        }
        getIP();
    }, []);

    return(
        <div className='container'>
            <img src={logo} alt="logo"></img>
            <h1>Bem-Vindo!</h1>
            <h2>Agora você é um filiado!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Egestas integer eget aliquet nibh praesent. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Neque ornare aenean euismod elementum nisi. Nec feugiat nisl pretium fusce id velit ut. Est ante in nibh mauris cursus mattis molestie a. Eget mauris pharetra et ultrices neque ornare aenean euismod. Quam quisque id diam vel quam. Molestie nunc non blandit massa enim nec dui nunc.
            Amet dictum sit amet justo donec enim diam. Pharetra sit amet aliquam id. Odio facilisis mauris sit amet massa vitae. Ac auctor augue mauris augue neque. Et ultrices neque ornare aenean euismod elementum nisi quis. Mi in nulla posuere sollicitudin aliquam ultrices. Congue nisi vitae suscipit tellus. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Et malesuada fames ac turpis egestas integer eget.</p>
            <p>ip: </p>
            <button>LOGOUT</button>
        </div>
    )
}