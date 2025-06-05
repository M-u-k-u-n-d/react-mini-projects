import { createSlice } from "@reduxjs/toolkit"; 

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: false,
        video : null
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closedMenu: (state) => {
            state.isMenuOpen = false;
        },
        updateVideo: (state, action) => {
            state.video = action.payload;
        }
    }
});

// Correct exports
export const { toggleMenu, closedMenu , updateVideo} = appSlice.actions;
export default appSlice.reducer;
