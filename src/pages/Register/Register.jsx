import React, { useState } from 'react';
import './Register.css';
import useLogin from '@hooks/useLogin';
import InputText from '@components/InputText';
import { button, aqua } from '@styles/buttons.module.css';
import Spinner from '@components/Spinner';

function Register() {
    const [form, setForm] = useState({});
    const [formError, setFormError] = useState({});

    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (e) => {
        const { value } = e.target;
        setSelectedOption(value);
    };

    const {
        login, success, error, loading,
    } = useLogin();

    const handleFormChange = (e) => {
        const field = e.target.name;
        const { value } = e.target;
        setForm((lastValue) => ({ ...lastValue, [field]: value }));
    };

    const validateName = () => {
        if (form?.name?.trim().length > 0) return true;
        setFormError((lastVal) => ({ ...lastVal, name: 'El nombre es obligatorio.' }));
        return false;
    };

    const validateEmail = () => {
        if (form?.email?.trim().length > 0) return true;
        setFormError((lastVal) => ({ ...lastVal, email: 'El email es obligatorio.' }));
        return false;
    };

    const validatePassword = () => {
        if (form?.password?.trim().length > 0) return true;
        setFormError((lastVal) => ({ ...lastVal, password: 'La contraseña es obligatoria.' }));
        return false;
    };

    const clearErrors = () => {
        setFormError({});
    };

    const handleSubmit = () => {
        clearErrors();
        if (!(validateEmail() & validatePassword() & validateName())) return;
        login(form);
    };
    return (
        <div className="login-page">
          <div className="login-page-image" />
          <form className="loginForm">
            <div className="form-container">
              <h1>Registro de usuarios</h1>
              <div className="inputs-container">
              <InputText
                  title="name"
                  name="name"
                  placeholder="Ingrese su nombre."
                  error={formError?.name}
                  onChange={handleFormChange}
                  value={form?.name}
                />
                <InputText
                  title="email"
                  name="email"
                  placeholder="Ingresa tu email."
                  error={formError?.email}
                  onChange={handleFormChange}
                  value={form?.email}
                />
                <InputText
                  type="password"
                  title="contraseña"
                  name="password"
                  placeholder="Ingresa tu contraseña."
                  error={formError?.password}
                  onChange={handleFormChange}
                  value={form?.password}
                />
                <InputText
                  type="password"
                  title="Confirmación contraseña"
                  name="password"
                  placeholder="Confirme la contraseña"
                  error={formError?.password}
                  onChange={handleFormChange}
                  value={form?.password}
                />
                <div className='UserType'>Tipo de Usuario </div>
                <div className="radio-container">
                    <label className='Radiotitle'>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={selectedOption === "male"}
                        onChange={handleRadioChange}
                    />
                    Administrador
                    </label>
                    <label className='Radiotitle'>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={selectedOption === "female"}
                        onChange={handleRadioChange}
                    />
                    Trabajador
                    </label>
                </div>


                {error && <div className="error-message">{error}</div>}
                {!loading && !success && (
                  <button type="button" className={`${button} ${aqua}`} onClick={handleSubmit}>
                    Registrarse
                  </button>
                )}
    
                {loading && <Spinner />}
{/*     
                <div className="forgot-password-container">
                  <span>¿Olvidaste tu contraseña?</span>
                  <a href="./">Recupérala</a>
                </div> */}
              </div>
            </div>
          </form>
        </div>
      );
}

export default Register