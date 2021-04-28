import React, { useState } from 'react'
import LiveGame from './LiveGame';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function LiveGames() {
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
  const [league, setLeague] = useState('');

  const handleLeagueChange = (event) => {
    setLeague(event.target.value);
  };


  return (
    <div className="liveGames">
      <div className="liveGame__select liveGame--select">
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">League</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={league}
            onChange={handleLeagueChange}
            label="League"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Dstv PremeirShip</MenuItem>
            <MenuItem value={20}>Nedbank</MenuItem>
            <MenuItem value={30}>Absa Top 8</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="liveGames__title">
        <p>DSTV Premeir League <small>All Games</small></p>
      </div>
      <LiveGame games={games} />

    </div>
  )
}

export default LiveGames
