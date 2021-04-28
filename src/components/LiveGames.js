import React, { useState } from 'react'
import LiveGame from './LiveGame';

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
    awayTeamName: 'Rats',
    awayTeamLogo: '/assets/pirates.png',
    score: '1 - 3'
  }
  ]
  const [games] = useState(initialState)
  return (
    <div className="liveGames">
      <div className="liveGames__title">
        <p>DSTV Premeir League <small>All Games</small></p>
      </div>
      <LiveGame games={games} />

    </div>
  )
}

export default LiveGames
