import React from 'react'

function LiveGame({ games }) {

  return (
    <div className="liveGame">
      {games.map((game, index) =>
        <div className="liveGame__match" key={index} >
          <div className="liveGame__home">
            <div className="liveGame__teamLogo">
              <img src={game.homeTeamLogo} alt="home team" />
            </div>
            <p>{game.homeTeamName}</p>
          </div>
          <div className="liveGame__score">
            <p>{game.score}</p>
          </div>
          <div className="liveGame__away">
            <div className="liveGame__teamLogo">
              <img src={game.awayTeamLogo} alt="away team" />
            </div>
            <p>{game.awayTeamName}</p>
          </div>
          <div className="liveGame__time">
            <p>+{20 * (index + 1)}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default LiveGame
