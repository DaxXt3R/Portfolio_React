//* this is the main redux store object, all the slices get put into it by reduxToolkit automatically, this object is what provides the stores to App.jsx

import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme";
import windowSlice from "./slices/window";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    window: windowSlice.reducer,
  },
});

export default store;
