import { createSlice } from "@reduxjs/toolkit";

const windowSlice = createSlice({
	name: "window",
	initialState: {
		isOpen: false,
		heading: "heading",
		description: ["add description here"],
		images: ["/imageDefault.jpg"],
		button: "",
		link: "",
		github: "",
		cover: "",
		maximizedImage: "",
		isMaximized: false,
	},
	reducers: {
		toggleOpen(state) {
			state.isOpen = !state.isOpen;
		},
		open(state, action) {
			state.isOpen = true;
			state.heading = action.payload.heading;
			state.description = action.payload.description;
			state.images = action.payload.images;
			state.button = action.payload.button;
			state.link = action.payload.link;
			state.github = action.payload.github;
			state.cover = action.payload.cover;
		},
		close(state) {
			state.isOpen = false;
		},
		openImage(state, action) {
			state.isMaximized = true;
			state.maximizedImage = action.payload;
			console.log(state.isMaximized,"opened image ",state.maximizedImage);
		},
		closeImage(state) {
			state.isMaximized = false;
		},
	},
});

export default windowSlice;
export const windowActions = windowSlice.actions;
