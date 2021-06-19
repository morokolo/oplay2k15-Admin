import React from 'react'
import { connect } from "react-redux";
import LiveGame from './LiveGame';
import Alert from '@material-ui/lab/Alert';
import LeagueSelect from './LeagueSelect';
import { getSelectedLeague } from '../redux/selector';
import { useGames } from '../hooks/games-hook';

const LiveGames = ({ selectedLeague }) => {
  const matches = useGames({ leagueId: selectedLeague.id })

  return (
    <div className="liveGames">
      <LeagueSelect />
      {
        selectedLeague ? <div>
          <div className="liveGames__title">
            <p>{selectedLeague.league.name} <small>All Games</small></p>
          </div>
          <LiveGame games={matches} leagueId={selectedLeague.id} />
        </div> :
          <>
            <br />
            <Alert variant="outlined" severity="info">
              Please select a league above to continue
            </Alert>
          </>
      }

      {
        (selectedLeague && matches.length === 0) &&
        <Alert variant="outlined" severity="warning">
          No games available for your selection
          </Alert>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return { selectedLeague: getSelectedLeague(state) };
};

export default connect(mapStateToProps)(LiveGames);

