import { createSelector } from 'reselect';

//input selector = doesn't use createSelector (goes one level deep / one slice of state)
const selectShop = (state) => state.shop;

//output selector
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],

  (collections) => Object.keys(collections).map((key) => collections[key])
);

//get one specific collection - this is not memoized
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
