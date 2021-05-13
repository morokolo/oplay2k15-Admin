import React, { useState } from 'react'
import { connect } from "react-redux";
import LiveGame from './LiveGame';
import Alert from '@material-ui/lab/Alert';
import LeagueSelect from './LeagueSelect';
import { getSelectedLeague } from '../redux/selector';

function LiveGames({ selectedLeague }) {
  const initialState = [{
    homeTeamName: 'Pirates',
    homeTeamLogo: '/assets/pirates.png',
    awayTeamName: 'Chiefs',
    awayTeamLogo: '/assets/chiefs.png',
    score: '0 - 2'
  },
  {
    homeTeamName: 'Khosi',
    homeTeamLogo: '/assets/chiefs.png',
    awayTeamName: 'Baka',
    awayTeamLogo: '/assets/pirates.png',
    score: '1 - 3'
  }
  ]

  const [games] = useState(initialState);

  return (
    <div className="liveGames">
      <LeagueSelect />
      {
        selectedLeague ? <div>
          <div className="liveGames__title">
            <p>{selectedLeague.id} <small>All Games</small></p>
          </div>
          <LiveGame games={games} />
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

