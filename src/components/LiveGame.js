import React, { useReducer } from 'react';
import LiveGameSideBar from './LiveGameSideBar';
import sidebarReducer from '../redux/reducers/sidebar-reducer';
import SideBarContext from '../context/sideBar-context';

function LiveGame({ games }) {
  const [openSideBar, dispatch] = useReducer(sidebarReducer, false);


  const handleOpenDrawer = (e) => {
    e.preventDefault();
    dispatch({ type: 'TOGGLE_SIDEBAR', toggle: true })
  }

  return (
    <SideBarContext.Provider value={{ openSideBar, dispatch }}>
      <div className="liveGame">
        {games.map((game, index) =>
          <div className="liveGame__match" key={game.id} onClick={handleOpenDrawer}>
            <div className="liveGame__home">
              <div className="liveGame__teamLogo">
                <img src={game.games.homeTeamLogo} alt="home team" />
              </div>
              <p>{game.games.homeTeamName}</p>
            </div>
            <div className="liveGame__score">
              <p>v/s</p>
            </div>
            <div className="liveGame__away">
              <div className="liveGame__teamLogo">
                <img src={game.games.awayTeamLogo} alt="away team" />
              </div>
              <p>{game.games.awayTeamName}</p>
            </div>
            <div className="liveGame__time">
              <p>+{20}</p>
            </div>
          </div>
        )}
      </div>
      <LiveGameSideBar />
    </SideBarContext.Provider>
  )
}

export default LiveGame
