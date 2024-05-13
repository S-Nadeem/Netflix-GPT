import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/Slices/userSlice";
import movieReducer from "../store/Slices/movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});

export default appStore;
