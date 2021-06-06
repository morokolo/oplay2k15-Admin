import React, { useContext, useEffect, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import sideBarContext from '../context/sideBar-context';
import AddBoxSharpIcon from '@material-ui/icons/AddBoxSharp';
import IndeterminateCheckBoxSharpIcon from '@material-ui/icons/IndeterminateCheckBoxSharp';
import Button from '@material-ui/core/Button';


function LiveGameSideBar() {
  const anchor = 'right';
  const { gameSideBar, dispatch } = useContext(sideBarContext);
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)

  const toggleDrawer = (anchor, _openSideBar) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setHomeScore(0)
    setAwayScore(0)
    dispatch({ type: 'TOGGLE_SIDEBAR', toggle: _openSideBar })
  };

  const handleSubtractScore = (e, ishome) => {
    e.preventDefault()

    if (ishome) {
      const newHomeScore = homeScore - 1
      setHomeScore(newHomeScore)
    } else {
      const newAwayScore = awayScore - 1
      setAwayScore(newAwayScore)
    }
  }

  const handleAddScore = (e, ishome) => {
    e.preventDefault()

    if (ishome) {
      const newHomeScore = homeScore + 1
      setHomeScore(newHomeScore)
    } else {
      const newAwayScore = awayScore + 1
      setAwayScore(newAwayScore)
    }
  }

  const sidebarInformation = (anchor) => (
    <div
      className="sidebar"
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="liveGameSidebar">
        <div className="liveGameSidebar__title">
          <p>Dstv Premier League</p>
        </div>
        <div className="liveGameSidebar__teams">
          <div className="liveGameSidebar__teamsBlock">
            <img src={gameSideBar ?.game.games.homeTeamLogo} alt="home team" />
            <br />
            <p>{gameSideBar ?.game.games.homeTeamName}</p>
          </div>

          <div className="liveGameSidebar__teamsBlock liveGameSidebar__teamsBlock--middle">
            <p>{gameSideBar ?.game.games.dayOfMatch}</p>
            <p>Score: {homeScore} - {awayScore}</p>
          </div>

          <div className="liveGameSidebar__teamsBlock">
            <img src={gameSideBar ?.game.games.awayTeamLogo} alt="awy team" />
            <br />
            <p>{gameSideBar ?.game.games.awayTeamName}</p>
          </div>
        </div>
        <div className="liveGameSidebar__scoreUpdate">
          <div className="liveGameSidebar__scoreUpdate__home">
            <IndeterminateCheckBoxSharpIcon onClick={(e) => handleSubtractScore(e, true)} />
            <AddBoxSharpIcon onClick={(e) => handleAddScore(e, true)} />
          </div>
          <div className="liveGameSidebar__scoreUpdate__away">
            <IndeterminateCheckBoxSharpIcon onClick={(e) => handleSubtractScore(e, false)} />
            <AddBoxSharpIcon onClick={(e) => handleAddScore(e, false)} />
          </div>
        </div>
        <div className="liveGameSidebar__actions">
          <Button
            variant="outlined"
            color="primary"
            onClick={toggleDrawer(anchor, false)}
          >
            Cancel
        </Button>
          <Button variant="outlined" color="secondary">
            Save
        </Button>
        </div>
      </div>
    </div>
  );

  return (
    <Drawer anchor={anchor} open={gameSideBar ?.toggle} onClose={toggleDrawer(anchor, false)}>
      {sidebarInformation(anchor)}
    </Drawer>
  );
}

export default LiveGameSideBar
