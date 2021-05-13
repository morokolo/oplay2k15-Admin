import React from 'react'
import LeagueSelect from './LeagueSelect';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';


function UpcomingGames() {
  const [calendarFocused, setCalendarFocused] = React.useState(false);
  const [gameDate, setGameDate] = React.useState(moment());

  const onFocusChange = ({ focused }) => {
    setCalendarFocused(focused)
  }

  const onDateChange = (selectedGameDate) => {
    if (selectedGameDate) {
      setGameDate(selectedGameDate)
    }
  }

  return (
    <div className="upcomingGames">
      <LeagueSelect />

      <div>
        game selection
        <SingleDatePicker
          date={moment()}
          onDateChange={onDateChange}
          focused={calendarFocused}
          onFocusChange={onFocusChange}
          id="your_unique_id"
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>

      <div>
        show selection
      </div>

      <div>
        save game
      </div>
    </div>
  )
}

export default UpcomingGames
