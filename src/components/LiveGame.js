import React from 'react'

function LiveGame({ games }) {
  return (
    <div className="liveGame">
      {games.map((game, index) =>
        <div className="liveGame__match" key={index}>
          <div className="liveGame__home">
            <img src={game.homeTeamLogo} alt="home team" />
            {game.homeTeamName}
          </div>
          <div className="liveGame__score">
            {game.score}
          </div>
          <div className="liveGame__away">
            <img src={game.awayTeamLogo} alt="away team" />
            {game.awayTeamName}
          </div>
          <div className="liveGame__time">
            {20 * (index + 1)}
          </div>
        </div>
      )}
    </div>
  )
}

export default LiveGame
