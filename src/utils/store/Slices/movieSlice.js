import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowplayingMovies: null,
    movieTrailer: null,
  },
  reducers: {
    addnowplayingMovies: (state, action) => {
      state.nowplayingMovies = action.payload;
    },
    addmovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const { addnowplayingMovies, addmovieTrailer } = movieSlice.actions;

export default movieSlice.reducer;
