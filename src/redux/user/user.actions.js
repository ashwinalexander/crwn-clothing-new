//actions = functions that return objects = something components will leverage in order to actually update reducer
//this of this as a setter action

import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
