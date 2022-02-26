import { createSelector } from 'reselect';

//input selector = doesn't use createSelector (goes one level deep / one slice of state)
const selectUser = (state) => state.user;
// const selectCart = (state) => state.cart;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

//alternate way to pass in input selector (doesn't have to be an array)
// export const selectCurrentUser = createSelector(
//   selectUser,
//   selectCart,
//   (user, cart) => user.currentUser
// );
