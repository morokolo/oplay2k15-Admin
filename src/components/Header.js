import React from 'react';
import Button from '@material-ui/core/Button';
import { useAuth } from '../hooks/auth-hook';


function Header() {
  const auth = useAuth();

  const handleLogout = (event) => {
    event.preventDefault();
    auth.signout()
  }

  return (
    <div className="header">
      <div className="header__section">
        <img className="header__logo" src="/assets/LOGO_Pink.png" alt="Oplay" />
        {auth.user && <Button variant="outlined" size="medium" color="secondary" onClick={handleLogout}> Logout </Button>}
      </div>
      {auth.user && <hr />}
    </div>
  )
}

export default Header
