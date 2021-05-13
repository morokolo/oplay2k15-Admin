import React, { useReducer } from 'react';
import LeftNav from './LeftNav';
import BodyContent from './BodyContent';
import PlayPageContext from '../context/play-page-context';
import menuItemReducer from '../redux/reducers/menuItem-reducer';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/auth-hook';

function OplayContainer() {
  const [selectedMenu, dispatch] = useReducer(menuItemReducer, 1);
  const auth = useAuth();

  return (
    <>
      {!auth.user && <Redirect to="/" />}
      <PlayPageContext.Provider value={{ selectedMenu, dispatch }}>
        <div className="oplayContainer">
          <LeftNav className="oplayContainer__left" />
          <BodyContent className="oplayContainer__body" />
        </div>
      </PlayPageContext.Provider>
    </>
  )
}

export default OplayContainer
