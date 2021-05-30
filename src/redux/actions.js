import { CHANGE_SELECTED_LEAGUE, RESET_SELECTED_LEAGUE, SET_UPCOMING_TEAM } from "./actionTypes";

export const changeSeletedLeague = content => ({
  type: CHANGE_SELECTED_LEAGUE,
  payload: {
    content
  }
});

export const resetSeletedLeague = () => ({
  type: RESET_SELECTED_LEAGUE
});

export const updateUpComingMatch = content => ({
  type: SET_UPCOMING_TEAM,
  payload: {
    content
  }
});