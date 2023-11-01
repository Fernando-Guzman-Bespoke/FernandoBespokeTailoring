import React, { useContext } from 'react';
import Login from '@pages/Login';
import SessionContext from '@context/SessionContext';
import LoggedPage from '@/pages/LoggedPage';
import Register from '../Register/Register';
function MainPage() {
  const { token } = useContext(SessionContext);

  let page;
  console.log(token)
  // if (token === null) page = <Login />;
  if (token === null) page = <Login />;
  // else if (token) console.log('inicio sesion')
  else if (token) page = <LoggedPage token={token} />;
  console.log(page)
  return (
    page
  );
}

export default MainPage;
