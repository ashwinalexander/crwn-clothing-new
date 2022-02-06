// root reducer = code which combines all our states together
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
// The reason why a redux reducer is called a reducer is because you could "reduce" a collection of actions and an initial state (of the store) on which to perform these actions to get the resulting final state.
//reducer is like reduce in javascript - takes many inputs, returns one single value

//our full state is just one big json object
//key represents slices of state
export default combineReducers({
  user: userReducer,
});
