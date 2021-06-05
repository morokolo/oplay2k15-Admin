import React from 'react';
import { connect } from "react-redux";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useLeagueTeams } from '../hooks/teams-hook';
import { getSelectedLeague } from '../redux/selector';
import { updateUpComingMatch } from '../redux/actions';

function TeamSelect({ side, selectedLeague, dispatch }) {
  const [team, setTeam] = React.useState('');
  const leagueTeams = useLeagueTeams({ leagueId: selectedLeague.id });

  const handleTeamChange = (event) => {
    let team = {}
    if (side.toLowerCase() === 'home') {
      const foundTeam = getSelectedTeam(event.target.value)
      team = {
        homeTeam: {
          homeTeamLogo: foundTeam ? foundTeam.team.imageUrl : null,
          homeTeamName: foundTeam ? foundTeam.team.name : null
        }
      }
    } else if (side.toLowerCase() === 'away') {
      const foundTeam = getSelectedTeam(event.target.value)
      team = {
        awayTeam: {
          awayTeamLogo: foundTeam ? foundTeam.team.imageUrl : null,
          awayTeamName: foundTeam ? foundTeam.team.name : null
        }
      }
    }


    setTeam(event.target.value)
    dispatch(updateUpComingMatch(team))
  }

  const getSelectedTeam = (id) => {
    return leagueTeams.find((team) => team.id === id)
  }

  return (
    <div className="team-select">
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">{`${side} Team`}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={team}
          onChange={handleTeamChange}
          label={`${side} Team`}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            leagueTeams.map(leagueTeam => (
              <MenuItem key={leagueTeam.id} value={leagueTeam.id}>{leagueTeam.team.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  )
}

const mapStateToProps = state => {
  return { selectedLeague: getSelectedLeague(state) };
};

export default connect(mapStateToProps)(TeamSelect)
