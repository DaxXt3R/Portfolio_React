import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  /* define all the variables to be stored in the state */
  initialState: {
    value: localStorage.getItem("theme") || "light" /* if there is not theme in localStorage get light as a default */,
    accent: "red",
    lang: 0,
  },

  /* the current state obj gets passed automatically by reduxToolkit to whatever method you call here */
  reducers: {
    toggle(state) {
      state.value = state.value === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.value);
      // console.log("theme is",state.value);
    },
    // to change the accent you have to call accent("blue")
    accent(state, action) {
      state.accent = action.payload;
      localStorage.setItem("accent", state.accent);
    },
    toggleLang(state) {
      state.lang = state.lang === 0 ? 1 : 0;
      console.log("lang is", state.lang);
    },
  },
});

export default themeSlice;
export const themeActions = themeSlice.actions;
