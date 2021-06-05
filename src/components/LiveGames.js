import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import LiveGame from './LiveGame';
import Alert from '@material-ui/lab/Alert';
import LeagueSelect from './LeagueSelect';
import { getSelectedLeague } from '../redux/selector';
import { useGames } from '../hooks/games-hook';

function LiveGames({ selectedLeague }) {
  const matches = useGames({ leagueId: selectedLeague.id })


  return (
    <div className="liveGames">
      <LeagueSelect />
      {
        selectedLeague ? <div>
          <div className="liveGames__title">
            <p>{selectedLeague.id} <small>All Games</small></p>
          </div>
          <LiveGame games={matches} />
        </div> :
          <Alert variant="outlined" severity="info">
            Please select a league above to continue
        </Alert>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return { selectedLeague: getSelectedLeague(state) };
};

export default connect(mapStateToProps)(LiveGames);

