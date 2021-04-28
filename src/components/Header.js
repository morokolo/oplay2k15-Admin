import React from 'react';
import Button from '@material-ui/core/Button';

function Header({ isLoggedIn }) {
  return (
    <div className="header">
      <div className="header__section">
        <img className="header__logo" src="/assets/LOGO_Pink.png" alt="Oplay" />
        {isLoggedIn && <Button variant="outlined" size="medium" color="secondary"> Logout </Button>}
      </div>
      {isLoggedIn && <hr />}
    </div>
  )
}

export default Header
