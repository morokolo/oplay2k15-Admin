import { CHANGE_SELECTED_LEAGUE, RESET_SELECTED_LEAGUE } from "../actionTypes";

const initialState = '';

const league = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_LEAGUE:
      const { content } = action.payload;
      return content
    case RESET_SELECTED_LEAGUE:
      return initialState
    default:
      return state
  }
}

export { league as default }