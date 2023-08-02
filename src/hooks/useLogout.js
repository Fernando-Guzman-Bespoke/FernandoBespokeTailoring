import { useContext } from 'react';
import SessionContext from '@context/SessionContext';

function useLogout() {
  const { setToken } = useContext(SessionContext);
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return logout;
}

export default useLogout;
