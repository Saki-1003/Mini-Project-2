import { useState } from 'react';
import { createContext } from 'react';

export const LoginContext = createContext({})

export function UserProvider(props) {

  const [user, setUser] = useState({})

  function handleUserLogin(user) {
    setUser(user)
  }

  return(
    <LoginContext.Provider value={{user, handleUserLogin}}>
      {props.children}
    </LoginContext.Provider>
  )

}
