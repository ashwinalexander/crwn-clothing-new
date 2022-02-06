// root reducer = code which combines all our states together
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

//our full state is just one big json object
//key represents slices of state
export default combineReducers({
  user: userReducer,
});
