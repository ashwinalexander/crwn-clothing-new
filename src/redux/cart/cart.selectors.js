import { createSelector } from 'reselect';

//input selector = doesn't use createSelector (goes one level deep / one slice of state)
const selectCart = (state) => state.cart;

//output selector = uses createSelector - takes an array of input selectors AND function that returns the value we want out of the selector
//output selector: (goes more levels deep in state)
//this is now a memoized selector since we used creaeSelector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

//a selector is just a slice of state - and it can also be transformed - and is always memoized
