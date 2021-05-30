import { combineReducers } from "redux";
import league from "./league";
import upcomingGame from "./upcoming-game-reducer";

export default combineReducers({ league, upcomingGame });