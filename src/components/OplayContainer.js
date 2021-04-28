import React, { useReducer } from 'react';
import LeftNav from './LeftNav';
import BodyContent from './BodyContent';
import PlayPageContext from '../context/play-page-context';
import menuItemReducer from '../reducers/menuItem-reducer';

function OplayContainer() {
  const [selectedMenu, dispatch] = useReducer(menuItemReducer, 1);

  return (
    <PlayPageContext.Provider value={{ selectedMenu, dispatch }}>
      <div className="oplayContainer">
        <LeftNav className="oplayContainer__left" />
        <BodyContent className="oplayContainer__body" />
      </div>
    </PlayPageContext.Provider>
  )
}

export default OplayContainer
