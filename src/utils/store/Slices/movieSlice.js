import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowplayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    tvSeries: null,
  },
  reducers: {
    addmovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addnowplayingMovies: (state, action) => {
      state.nowplayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addTvSeries: (state, action) => {
      state.tvSeries = action.payload;
    },
  },
});

export const {
  addnowplayingMovies,
  addmovieTrailer,
  addPopularMovies,
  addTopRated,
  addUpcoming,
  addTvSeries,
} = movieSlice.actions;

export default movieSlice.reducer;
