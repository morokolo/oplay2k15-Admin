import React, { useContext } from 'react'
import Settings from './Settings';
import LiveGames from './LiveGames';
import UpcomingGames from './UpcomingGames';
import PlayPageContext from '../context/play-page-context';

function BodyContent() {
  const { selectedMenu } = useContext(PlayPageContext);

  return (
    <div className="bodyContent">
      {selectedMenu === 1 && <LiveGames />}
      {selectedMenu === 2 && <UpcomingGames />}
      {selectedMenu === 3 && <Settings />}
    </div>
  )
}

export default BodyContent
