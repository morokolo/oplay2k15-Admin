import { SET_UPCOMING_TEAM } from "../actionTypes";

const initialState = {
  homeTeam: null,
  awayTeam: null,
  dateTime: null
};

const upcomingGame = (state = initialState, action) => {
  switch (action.type) {
    case SET_UPCOMING_TEAM:
      const { content } = action.payload;
      return {
        ...state,
        ...content
      }
    default:
      return state
  }
}

export { upcomingGame as default }