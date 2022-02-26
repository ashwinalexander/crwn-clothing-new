//this is the single source of truth
//needs root reducer i.e sum of all reducers

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';

const middlewares = [logger];

//before using Redux Persist
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
//persisting in the Store
export const persistor = persistStore(store);

export default { store, persistor };
