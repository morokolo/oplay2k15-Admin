import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useAuth } from '../hooks/auth-hook';
import { Redirect } from 'react-router-dom';

function LoginPage({ history }) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const auth = useAuth();

  const onLoginSubmitHandle = (e) => {
    e.preventDefault();
    auth.signin(userEmail, userPassword);
  }


  return (
    <>
      {auth.user && <Redirect to="/dashboard" />}
      <div className="login">
        <h2 className="login__title">Login</h2>
        {auth.error && <p>{auth.error}</p>}
        <form noValidate autoComplete="off" onSubmit={onLoginSubmitHandle}>
          <TextField
            id="outlined-basic"
            label="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            variant="outlined" />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            variant="outlined"
          />
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
          >
            Login
        </Button>
        </form>
      </div>
    </>
  )
}

export default LoginPage
