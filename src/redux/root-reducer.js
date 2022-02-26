// root reducer = code which combines all our states together
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

//we want to use local-storage as my default store
import storage from 'redux-persist/lib/storage';
//in case we want to use session storage
//import session from 'redux-persist/lib/storage/session';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// The reason why a redux reducer is called a reducer is because you could "reduce" a collection of actions and an initial state (of the store) on which to perform these actions to get the resulting final state.
//reducer is like reduce in javascript - takes many inputs, returns one single value

const persistConfig = {
  key: 'root', //at what point within our reducer object do we want to start persisting storage
  storage,
  whitelist: ['cart'], //we don't need user
};

//our full state is just one big json object
//key represents slices of state
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
