import React, { useState }from 'react'
import './Login.css'
import traje from '../assets/traje.png';
import { useHistory } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showErrorModal, setShowErrorModal] = useState(false);
    const history = useHistory();

    const handleLogin = async () => {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        };
    
        try {
          const response = await fetch('http://localhost:8082/api/auth/signin', requestOptions);
          const data = await response.json();
          console.log(data)
          localStorage.setItem("token", data.accessToken)
          
          if (data.accessToken) {
            history.push('/measure');
          } else {
            setShowErrorModal(true);
          }
    
        } catch (error) {
          console.error('Hubo un error:', error);
        }
      }

      const closeModal = () => {
        setShowErrorModal(false);
      }

  return (
    <div className='contenido'>

    <div className='titulo'>
        <h1>Fernando Guzmán Bespoke Tailoring</h1>
        <img className='traje' src={traje} alt="" />
    </div>

    <div className='login-container' >

        <h1 className='LoginTitle'>Login</h1>
        <h2>Bienvenido, por favor ingrese sus credenciales</h2>
        <div className='inputContainer'>
            <input className="input" type="text" placeholder="Correo" defaultValue="" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className='inputContainer'>
            <input className="input" type="text" placeholder="Contraseña" defaultValue="" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className='inputContainer'>
            <input className='check' type='checkbox'/> <p>Recordarme</p>
            <a href="#">Olvidé la contraseña</a>
        </div>
        
        <div className='botones'>
            <button className='buton'  onClick={handleLogin} >Iniciar Sesión</button>
            <button className='buton1' >Registrarse</button>
        </div>

    </div>

    { showErrorModal && 
      <div className='modal'>
        <div className='modal-content'>
          <h2>Credenciales incorrectas</h2>
          <p>El nombre de usuario o la contraseña que ingresaste son incorrectos.</p>
          <button onClick={closeModal}>Cerrar</button>
        </div>
      </div>
    }
    </div>
  )
}
