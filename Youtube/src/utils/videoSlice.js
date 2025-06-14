import { createSlice } from "@reduxjs/toolkit";
const videoSlice = createSlice({
    name: "video",
    initialState: {
        contents: []
    },
    reducers: {
        changeContent: (state , action) => {
            state.contents.length = 0;
            state.contents.push(action.payload);
        },
        loadMoreContent: (state , action) => {
           state.contents[0].push(action.payload);
        }
    }
});

export const { changeContent , loadMoreContent} = videoSlice.actions;

export default videoSlice.reducer;