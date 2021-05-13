import React, { useContext } from 'react';
import Drawer from '@material-ui/core/Drawer';
import sideBarContext from '../context/sideBar-context';
import AddBoxSharpIcon from '@material-ui/icons/AddBoxSharp';
import IndeterminateCheckBoxSharpIcon from '@material-ui/icons/IndeterminateCheckBoxSharp';
import Button from '@material-ui/core/Button';


function LiveGameSideBar() {
  const anchor = 'right';
  const { openSideBar, dispatch } = useContext(sideBarContext);

  const toggleDrawer = (anchor, _openSideBar) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    dispatch({ type: 'TOGGLE_SIDEBAR', toggle: _openSideBar })
  };

  const sidebarInformation = (anchor) => (
    <div
      className="sidebar"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="liveGameSidebar">
        <div className="liveGameSidebar__title">
          <p>Dstv Premier League</p>
        </div>
        <div className="liveGameSidebar__teams">
          <div className="liveGameSidebar__teamsBlock">
            <img src="/assets/chiefs.png" alt="home team" />
            <br />
            <small>KFC</small>
            <p>Kaizer Chiefs</p>
          </div>

          <div className="liveGameSidebar__teamsBlock liveGameSidebar__teamsBlock--middle">
            <p>30 April 2021</p>
            <p>Score: 1 - 0</p>
          </div>

          <div className="liveGameSidebar__teamsBlock">
            <img src="/assets/pirates.png" alt="awy team" />
            <br />
            <small>OPFC</small>
            <p>Orlando Pirates</p>
          </div>
        </div>
        <div className="liveGameSidebar__scoreUpdate">
          <div className="liveGameSidebar__scoreUpdate__home">
            <IndeterminateCheckBoxSharpIcon />
            <AddBoxSharpIcon />
          </div>
          <div className="liveGameSidebar__scoreUpdate__away">
            <IndeterminateCheckBoxSharpIcon />
            <AddBoxSharpIcon />
          </div>
        </div>
        <div className="liveGameSidebar__actions">
          <Button variant="outlined" color="primary">
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
    <Drawer anchor={anchor} open={openSideBar} onClose={toggleDrawer(anchor, false)}>
      {sidebarInformation(anchor)}
    </Drawer>
  );
}

export default LiveGameSideBar
