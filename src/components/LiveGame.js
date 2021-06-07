import React, { useReducer } from 'react';
import LiveGameSideBar from './LiveGameSideBar';
import sidebarReducer from '../redux/reducers/sidebar-reducer';
import SideBarContext from '../context/sideBar-context';

function LiveGame({ games }) {
  const [gameSideBar, dispatch] = useReducer(sidebarReducer, null);

  const handleOpenDrawer = (e, game) => {
    e.preventDefault();
    dispatch({ type: 'SIDEBAR_MATCH', game })
    dispatch({ type: 'TOGGLE_SIDEBAR', toggle: true })
  }

  return (
    <SideBarContext.Provider value={{ gameSideBar, dispatch }}>
      <div className="liveGame">
        {games.map((game, index) =>
          <div className="liveGame__match" key={game.id} onClick={(e) => handleOpenDrawer(e, game)}>
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
