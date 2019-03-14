import { combineReducers } from "redux";
import activity from "./activity";

const entities = combineReducers({
  activity
});

export default combineReducers({
  entities
});
