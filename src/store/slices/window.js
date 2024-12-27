import { createSlice } from "@reduxjs/toolkit";

const windowSlice = createSlice({
  name: "window",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleOpen(state) {
      state.isOpen = !state.isOpen;
      console.log("isOpen = ", state.isOpen);
    },
    open(state) {
      state.isOpen = true;
    },
    close(state) {
      state.isOpen = false;
    },
  },
});

export default windowSlice;
export const windowActions = windowSlice.actions;
