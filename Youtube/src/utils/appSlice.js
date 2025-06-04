import { createSlice } from "@reduxjs/toolkit"; 

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
    }
});

// Correct exports
export const { toggleMenu} = appSlice.actions;
export default appSlice.reducer;
