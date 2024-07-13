import { createSlice } from "@reduxjs/toolkit";
const geminiSlice = createSlice({
  name: "gemini",
  initialState: {
    showGeminiSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGeminiSearchView: (state, action) => {
      state.showGeminiSearch = !state.showGeminiSearch;
    },
    addGeminiMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGeminiSearchView, addGeminiMovieResult } = geminiSlice.actions;
export default geminiSlice.reducer;
