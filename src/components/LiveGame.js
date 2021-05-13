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
          <div className="liveGame__match" key={index} onClick={handleOpenDrawer}>
            <div className="liveGame__home">
              <div className="liveGame__teamLogo">
                <img src={game.homeTeamLogo} alt="home team" />
              </div>
              <p>{game.homeTeamName}</p>
            </div>
            <div className="liveGame__score">
              <p>{game.score}</p>
            </div>
            <div className="liveGame__away">
              <div className="liveGame__teamLogo">
                <img src={game.awayTeamLogo} alt="away team" />
              </div>
              <p>{game.awayTeamName}</p>
            </div>
            <div className="liveGame__time">
              <p>+{20 * (index + 1)}</p>
            </div>
          </div>
        )}
      </div>
      <LiveGameSideBar />
    </SideBarContext.Provider>
  )
}

export default LiveGame
