import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import OplayContainer from '../components/OplayContainer';
import { ProvideAuth } from '../hooks/auth-hook';
import PrivateRoute from './PrivateRoute';

function OplayRouters() {

  return (
    <ProvideAuth>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard">
              <OplayContainer />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  )
}

export default OplayRouters
