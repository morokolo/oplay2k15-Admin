import React from 'react'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import { connect } from "react-redux";
import { updateUpComingMatch } from '../redux/actions';
import * as moment from 'moment'

function DateTimeSelect({ dispatch }) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const Datetime = {
      dateTime: {
        dayOfMatch: moment(date).format('dddd, MMMM Do YYYY'),
        time: moment(date).format('HH:mm')
      }
    }

    dispatch(updateUpComingMatch(Datetime))
  };

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default connect()(DateTimeSelect)
