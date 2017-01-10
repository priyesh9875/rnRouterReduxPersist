import counter from './counter/reducer';
import user from './user/reducer';
import { combineReducers } from "redux"
export default root = combineReducers({
  counter,
  user
});
