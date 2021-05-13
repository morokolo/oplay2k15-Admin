import { CHANGE_SELECTED_LEAGUE, RESET_SELECTED_LEAGUE } from "./actionTypes";

export const changeSeletedLeague = content => ({
  type: CHANGE_SELECTED_LEAGUE,
  payload: {
    content
  }
});

export const resetSeletedLeague = () => ({
  type: RESET_SELECTED_LEAGUE
});
