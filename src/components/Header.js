import React from 'react';
import Button from '@material-ui/core/Button';
import {
  useHistory
} from "react-router-dom";


function Header({ isLoggedIn }) {
  let history = useHistory();

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="header">
      <div className="header__section">
        <img className="header__logo" src="/assets/LOGO_Pink.png" alt="Oplay" />
        {isLoggedIn && <Button variant="outlined" size="medium" color="secondary" onClick={handleLogout}> Logout </Button>}
      </div>
      {isLoggedIn && <hr />}
    </div>
  )
}

export default Header
