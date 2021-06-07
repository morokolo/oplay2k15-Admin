import React from 'react';
import { connect } from "react-redux";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useAvailableLeagues } from '../hooks/leagues-hook';
import { getSelectedLeague } from '../redux/selector';
import { changeSeletedLeague } from '../redux/actions';

function LeagueSelect({ selectedLeague, dispatch }) {
  const availableLeagues = useAvailableLeagues();

  const handleLeagueChange = (event) => {
    console.log(availableLeagues)
    const foundLeague = availableLeagues.find(league => league.id === event.target.value)
    dispatch(changeSeletedLeague(foundLeague))
  };

  return (
    <div className="league-select">
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">League</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={selectedLeague ? selectedLeague.id : ''}
          onChange={handleLeagueChange}
          label="League"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            availableLeagues.map(availableLeague => (
              <MenuItem key={availableLeague.id} value={availableLeague.id}>{availableLeague.league.name}</MenuItem>
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

export default connect(mapStateToProps)(LeagueSelect);
