import { createSelector } from 'reselect';

//input selector = doesn't use createSelector (goes one level deep / one slice of state)
const selectShop = (state) => state.shop;

//output selector
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
