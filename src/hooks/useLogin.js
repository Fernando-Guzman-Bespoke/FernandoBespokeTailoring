import { useContext, useState } from 'react';
import SessionContext from '@context/SessionContext';
import { serverHost } from '../config';

function useLogin() {
  const { setToken } = useContext(SessionContext);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState();

  const login = async ({ email, password }) => {
    setSuccess(null);
    setError(null);
    setLoading(true);

    const uri = `${serverHost}/api/auth/signin`;

    try {
      const reply = await fetch(uri, {
        method: 'POST',
        body: JSON.stringify({ username: email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (reply.ok !== true) throw reply;
      const res = await reply.json();
      console.log(res)
      const { token } = res;
      console.log(token)
      localStorage.setItem('token', token);
      setToken(token);
      setSuccess(true);
    } catch (ex) {
      setError(ex.status === 400 ? 'Usuario y/o contraseña incorrectos.' : 'Error de conexión.');
    } finally {
      setLoading(false);
    }
  };

  return {
    login, success, error, loading,
  };
}

export default useLogin;
