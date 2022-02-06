//actions = functions that return objects = something components will leverage in order to actually update reducer
//this of this as a setter action
export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});
