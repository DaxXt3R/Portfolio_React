//* this file takes all the slices, combines them, so that they can be used in ../store.js

import { combineReducers } from '@reduxjs/toolkit';
import themeSlice from "./theme";

export default rootReducer => combineReducers({
  theme: themeSlice,
});

