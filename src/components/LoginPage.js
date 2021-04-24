import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function LoginPage() {
  return (
    <div className="login">
      <h2 className="login__title">Login To Oplay</h2>
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined" />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          variant="outlined"
        />
        <Button
          variant="contained"
          size="large"
          color="primary">
          Login
      </Button>
      </form>
    </div>
  )
}

export default LoginPage
