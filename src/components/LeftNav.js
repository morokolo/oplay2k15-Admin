import React from 'react';
import {
  Link,
} from "react-router-dom";

function LeftNav() {
  return (
    <div className="leftNav">
      <ul>
        <li>
          <Link to="/">Live Game</Link>
        </li>
        <li>
          <Link to="/games">Upcoming Games</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  )
}

export default LeftNav
