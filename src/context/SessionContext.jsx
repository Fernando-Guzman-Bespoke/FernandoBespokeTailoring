import React, { createContext, useState, useEffect } from 'react';

const SessionContext = createContext();
function SessionProvider({ children }) {
  const [token, setToken] = useState();
  const data = { token, setToken };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  return (
    <SessionContext.Provider value={data}>
      {children}
    </SessionContext.Provider>
  );
}

export { SessionProvider };
export default SessionContext;
