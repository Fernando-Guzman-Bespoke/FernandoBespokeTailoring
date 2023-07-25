import React from 'react'
import './Login.css'
import traje from '../assets/traje.png';

export default function Login() {
  return (
    <div className='contenido'>

    <div className='titulo'>
        <h1>Fernando Guzmán Bespoke Tailoring</h1>
        <img className='traje' src={traje} alt="" />
    </div>

    <div className='login-container' >

        <h1>Login</h1>
        <h2>Bienvenido, por favor ingrese sus credenciales</h2>
        <div className='inputContainer'>
            <input className="input" type="text" placeholder="Correo" defaultValue=""/>
        </div>
        <div className='inputContainer'>
            <input className="input" type="text" placeholder="Contraseña" defaultValue=""/>
        </div>
        <div className='inputContainer'>
            <input className='check' type='checkbox'/> <p>Recordarme</p>
            <a href="#">Olvidé la contraseña</a>
        </div>
        
        <div className='botones'>
            <button className='buton' >Iniciar Sesión</button>
            <button className='buton1' >Registrarse</button>
        </div>

    </div>

    
    </div>
  )
}
