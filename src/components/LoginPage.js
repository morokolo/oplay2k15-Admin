import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { login } from '../services/authentication-service';
import { isUserLoggedIn } from '../services/shared-service';

function LoginPage({ history }) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [user, setUser] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    localStorage.setItem('oplay_user', JSON.stringify(user));
  }, [user])

  const onLoginSubmitHandle = (e) => {
    e.preventDefault();
    if (userEmail && userPassword) {
      if (error) {
        setError('');
      }
      login(userEmail, userPassword).then((userCredential) => {
        const { uid, refreshToken, email, displayName } = userCredential.user
        setUser({ uid, refreshToken, email, displayName });
        history.push('/dashboard');
      }).catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
    } else {
      const errorMessage = 'Please Provide Email and Password';
      setError(errorMessage);
    }
  }

  const getUser = () => {
    if (isUserLoggedIn()) {
      setUser(isUserLoggedIn());
      history.push('/dashboard');
    }
  }

  return (
    <div className="login">
      <h2 className="login__title">Login</h2>
      {error && <p>{error}</p>}
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
  )
}

export default LoginPage
