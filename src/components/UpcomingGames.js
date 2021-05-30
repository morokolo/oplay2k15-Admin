import 'date-fns';
import React from 'react'
import LeagueSelect from './LeagueSelect';
import TeamSelect from './TeamSelect';
import Button from '@material-ui/core/Button';
import DateTimeSelect from './DateTimeSelect';
import { getUpcomingGame } from '../redux/selector';
import { connect } from "react-redux";


function UpcomingGames({ upComingGame }) {
  const [myGame, setMyGame] = React.useState({})

  React.useEffect(() => {
    setMyGame(upComingGame)
  }, [upComingGame])

  const handleSaveGame = () => {

  }

  return (
    <div className="upcomingGames">
      <LeagueSelect />
      <div className="upcomingGames__selection">
        <TeamSelect side="Home" />
        <div className="upcomingGames__selection_datetime">
          <DateTimeSelect />
        </div>
        <TeamSelect side="Away" />
      </div>

      <div className="upcomingGames__show">
        <div className="upcomingGames__show__team">
          {
            myGame.homeTeam &&
            <>
              <img src={myGame.homeTeam.homeTeamLogo} alt="awy team" />
              <br />
              <p>{myGame.homeTeam.homeTeamName}</p>
            </>
          }
        </div>
        <div className="upcomingGames__show__time">
          {
            myGame.dateTime &&
            <>
              <p>Time</p>
              <p>{myGame.dateTime.dayOfMatch}</p>
              <p>{myGame.dateTime.time}</p>
            </>
          }
        </div>
        <div className="upcomingGames__show__team">
          {
            myGame.awayTeam &&
            <>
              <img src={myGame.awayTeam.awayTeamLogo} alt="awy team" />
              <br />
              <p>{myGame.awayTeam.awayTeamName}</p>
            </>
          }
        </div>
      </div>

      <div>
        <Button variant="outlined" size="medium" color="secondary" onClick={handleSaveGame}> Save a match </Button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return { upComingGame: getUpcomingGame(state) };
};

export default connect(mapStateToProps)(UpcomingGames)
