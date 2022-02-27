import { createSelector } from 'reselect';

//input selector = doesn't use createSelector (goes one level deep / one slice of state)
const selectDirectory = (state) => state.directory;

//output selector
export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
