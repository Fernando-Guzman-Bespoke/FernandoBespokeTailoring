import { useContext } from 'react';
import SessionContext from '@context/SessionContext';

function useToken() {
  const { token } = useContext(SessionContext);

  return token;
}

export default useToken;
