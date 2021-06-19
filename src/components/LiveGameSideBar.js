import React, { useContext, useState, useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
import sideBarContext from '../context/sideBar-context';
import AddBoxSharpIcon from '@material-ui/icons/AddBoxSharp';
import IndeterminateCheckBoxSharpIcon from '@material-ui/icons/IndeterminateCheckBoxSharp';
import Button from '@material-ui/core/Button';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import CloseIcon from '@material-ui/icons/Close';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import { db } from '../firebase/firebase';
import { getSelectedLeague } from '../redux/selector';
import { connect } from "react-redux";


function LiveGameSideBar({ selectedLeague }) {
  const anchor = 'right';
  const { gameSideBar, dispatch } = useContext(sideBarContext);
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
  const [gameStatus, setGameStatus] = useState('Inactive');

  useEffect(() => {
    if (gameSideBar) {
      setHomeScore(gameSideBar.game.games.homeScore ? gameSideBar.game.games.homeScore : 0)
      setAwayScore(gameSideBar.game.games.awayScore ? gameSideBar.game.games.awayScore : 0)
      setGameStatus(gameSideBar.game.games.status ? gameSideBar.game.games.status : 'Inactive')
    }
  }, [gameSideBar])

  const handleGameStatus = (event, gameStatus) => {
    setGameStatus(gameStatus);
  };

  const toggleDrawer = (anchor, _openSideBar) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setHomeScore(0)
    setAwayScore(0)
    dispatch({ type: 'TOGGLE_SIDEBAR', toggle: _openSideBar })
  };

  const handleSubtractScore = (e, ishome) => {
    if (ishome) {
      let newHomeScore = homeScore - 1
      if (newHomeScore < 0) {
        newHomeScore = 0;
      }
      setHomeScore(newHomeScore)
    } else {
      let newAwayScore = awayScore - 1
      if (newAwayScore < 0) {
        newAwayScore = 0;
      }
      setAwayScore(newAwayScore)
    }
  }

  const handleAddScore = (e, ishome) => {
    if (ishome) {
      const newHomeScore = homeScore + 1
      setHomeScore(newHomeScore)
    } else {
      const newAwayScore = awayScore + 1
      setAwayScore(newAwayScore)
    }
  }

  const handleUpdateGame = (e) => {
    e.preventDefault();
    const payload = {
      homeScore,
      awayScore,
      status: gameStatus
    }

    db.collection('leagues')
      .doc(selectedLeague.id)
      .collection('matches')
      .doc(gameSideBar.game.id).set({
        ...payload
      }, { merge: true }).then(() => {
        dispatch({ type: 'TOGGLE_SIDEBAR', toggle: false })
      });

  }

  const sidebarInformation = (anchor) => (
    <div
      className="sidebar"
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <span className="closeSidebar">
        <CloseIcon style={{ fontSize: 40 }} onClick={toggleDrawer(anchor, false)} />
      </span>
      <div className="liveGameSidebar">
        <div className="liveGameSidebar__title">
          <h3>{selectedLeague.league.name}</h3>
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
            <AddBoxSharpIcon style={{ fontSize: 45 }} onClick={(e) => handleAddScore(e, true)} />
            <IndeterminateCheckBoxSharpIcon style={{ fontSize: 35 }} onClick={(e) => handleSubtractScore(e, true)} />
          </div>
          <div>
            <ToggleButtonGroup
              value={gameStatus}
              exclusive
              onChange={handleGameStatus}
              aria-label="text alignment"
            >
              <ToggleButton value="Inactive" aria-label="left aligned">
                <VisibilityOffOutlinedIcon />
              </ToggleButton>
              <ToggleButton value="Active" aria-label="right aligned">
                <VisibilityOutlinedIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className="liveGameSidebar__scoreUpdate__away">
            <IndeterminateCheckBoxSharpIcon style={{ fontSize: 35 }} onClick={(e) => handleSubtractScore(e, false)} />
            <AddBoxSharpIcon style={{ fontSize: 45 }} onClick={(e) => handleAddScore(e, false)} />
          </div>
        </div>
        <div className="liveGameSidebar__actions">
          <Button variant="outlined" color="secondary" onClick={handleUpdateGame}>
            Update Game
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

const mapStateToProps = state => {
  return { selectedLeague: getSelectedLeague(state) };
};

export default connect(mapStateToProps)(LiveGameSideBar);
