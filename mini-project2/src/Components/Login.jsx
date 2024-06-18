import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../Context/UserProvider';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const {user, handleUserLogin} = useContext(LoginContext)
 

  function handleLogin() {
    console.log(email)
    console.log(password)

      if(email && password) {
        setEmail('')
        setPassword('')
        handleUserLogin({
          email: email,
          password: password
        })
      }
  }

  return(
    <main>
    <div className='form_container'>
      <h3>Login Page</h3>
        <TextField onChange={(e)=>setEmail(e.target.value)} value={email} sx={{marginBottom: 2}} type='email' label="email" variant="outlined" /><br />
        <TextField onChange={(e)=>setPassword(e.target.value)} value={password} sx={{marginBottom: 4}} type='password' label="password" variant="outlined" /><br />
        <Button onClick={handleLogin} variant="outlined">Login</Button>
    </div>
    </main>
  )
}