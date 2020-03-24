import React, { useEffect, useState } from 'react'
import logo from '../assets/medsenior.png'
import axios from 'axios'
import './Home.css'

export default function Home(){

    const [ip, setIp] = useState('Buscando IP...')

    useEffect(() => {
        async function getIP(){
            let res = await axios.get('http://meuip.com/api/meuip.php');
            let ip = res.data;
            setIp(ip);
            console.log(ip);
        }
        getIP();
    }, []);

    return(
        <div className='container'>
            <img src={logo} alt="logo" className="logo"></img>
            <h1>Bem-Vindo!</h1>
            <h2>Agora você é um filiado!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Egestas integer eget aliquet nibh praesent. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Neque ornare aenean euismod elementum nisi. Nec feugiat nisl pretium fusce id velit ut. Est ante in nibh mauris cursus mattis molestie a. Eget mauris pharetra et ultrices neque ornare aenean euismod. Quam quisque id diam vel quam. Molestie nunc non blandit massa enim nec dui nunc.</p>
            <div className="footer">
                <div className="ip">IP: {ip}</div>
                <div className="logout-button"><a href="/">LOGOUT</a></div>
            </div>
        </div>
    )
}