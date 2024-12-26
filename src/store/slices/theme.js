import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  /* define all the variables to be stored in the state */
  initialState: {
    value: "light",
    accent: "red",
  },

  /* the current state obj gets passed automatically by reduxToolkit to whatever method you call here */
  reducers: {
    toggle(state) {
      state.value = state.value === "light" ? "dark" : "light";
      // console.log("theme slice activated!");
    },
    // to change the accent you have to call accent("blue")
    accent(state, action) {
      state.accent = action.payload;
    },
  },
});

export default themeSlice;
export const themeActions = themeSlice.actions;
