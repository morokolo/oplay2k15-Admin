import React from 'react';
import LeftNav from './LeftNav';
import BodyContent from './BodyContent';

function OplayContainer() {
  return (
    <div className="oplayContainer">
      <LeftNav className="oplayContainer__left" />
      <BodyContent className="oplayContainer__body" />
    </div>
  )
}

export default OplayContainer
