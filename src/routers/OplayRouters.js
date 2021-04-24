import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import OplayContainer from '../components/OplayContainer';

function OplayRouters() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={LoginPage} exact={true} />
          <Route path="/dashboard" component={OplayContainer} />
        </Switch>
      </div>
    </Router>
  )
}

export default OplayRouters
