import React, { useReducer } from 'react';
import LiveGameSideBar from './LiveGameSideBar';
import sidebarReducer from '../redux/reducers/sidebar-reducer';
import SideBarContext from '../context/sideBar-context';
import SportsSoccerOutlinedIcon from '@material-ui/icons/SportsSoccerOutlined';

function LiveGame({ games, leagueId }) {
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
          <>
            <h6 className="liveGame__time">{game.games.dayOfMatch} at {game.games.time}</h6>
            <div className="liveGame__match" key={game.id} onClick={(e) => handleOpenDrawer(e, game)}>
              <div className="liveGame__home">
                <div className="liveGame__teamLogo">
                  <img src={game.games.homeTeamLogo} alt="home team" />
                </div>
                <p>{game.games.homeTeamName}</p>
              </div>
              <div className="liveGame__score">
                <SportsSoccerOutlinedIcon />
              </div>
              <div className="liveGame__away">
                <p>{game.games.awayTeamName}</p>
                <div className="liveGame__teamLogo">
                  <img src={game.games.awayTeamLogo} alt="away team" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <LiveGameSideBar />
    </SideBarContext.Provider>
  )
}

export default LiveGame
