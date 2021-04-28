import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import OplayContainer from '../components/OplayContainer';
import { isUserLoggedIn } from '../services/shared-service';

function OplayRouters() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    if (isUserLoggedIn()) {
      setIsLoggedIn(true);
    }
  }, [])

  return (
    <Router>
      <div>
        <Header isLoggedIn={isLoggedIn} />
        <Switch>
          <Route path="/" component={LoginPage} exact={true} />
          <Route path="/dashboard" component={OplayContainer} />
        </Switch>
      </div>
    </Router>
  )
}

export default OplayRouters
