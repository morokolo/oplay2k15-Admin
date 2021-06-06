import 'date-fns';
import React from 'react'
import LeagueSelect from './LeagueSelect';
import TeamSelect from './TeamSelect';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DateTimeSelect from './DateTimeSelect';
import { getUpcomingGame, getSelectedLeagueId } from '../redux/selector';
import { connect } from "react-redux";
import firebase from 'firebase';
import { db } from '../firebase/firebase';


function UpcomingGames({ upComingGame, leagueId }) {
  const [myGame, setMyGame] = React.useState({})
  const [minAmount, setMinAmount] = React.useState('10')

  React.useEffect(() => {
    setMyGame(upComingGame)
  }, [upComingGame])

  const handleSaveGame = () => {
    const payload = {
      ...upComingGame.awayTeam,
      ...upComingGame.homeTeam,
      ...upComingGame.dateTime,
      minPrice: minAmount
    }

    const hasEmptyKey = Object.keys(payload).some(x => payload[x] === null || payload[x] === '');

    if (hasEmptyKey) return

    db.collection('leagues')
      .doc(leagueId)
      .collection('matches')
      .add({
        ...payload,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
  }

  const onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setMinAmount(amount)
    }
  }

  return (
    <div className="upcomingGames">
      <LeagueSelect />
      <hr />
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
            <React.Fragment>
              <img src={myGame.homeTeam.homeTeamLogo} alt="awy team" />
              <br />
              <p>{myGame.homeTeam.homeTeamName}</p>
            </React.Fragment>
          }
        </div>
        <div className="upcomingGames__show__time">
          {
            myGame.dateTime &&
            <React.Fragment>
              <p>Time</p>
              <p>{myGame.dateTime.dayOfMatch}</p>
              <p>{myGame.dateTime.time}</p>
            </React.Fragment>
          }
        </div>
        <div className="upcomingGames__show__team">
          {
            myGame.awayTeam &&
            <React.Fragment>
              <img src={myGame.awayTeam.awayTeamLogo} alt="awy team" />
              <br />
              <p>{myGame.awayTeam.awayTeamName}</p>
            </React.Fragment>
          }
        </div>
      </div>

      <div className="upcomingGames__minPrice" >
        <TextField
          id="standard-basic"
          label="Min Price"
          value={minAmount}
          onChange={onAmountChange}
        />
      </div>

      <div>
        <Button
          variant="outlined"
          size="medium"
          color="secondary"
          onClick={handleSaveGame}>
          Save a match
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return { upComingGame: getUpcomingGame(state), leagueId: getSelectedLeagueId(state) };
};

export default connect(mapStateToProps)(UpcomingGames)
