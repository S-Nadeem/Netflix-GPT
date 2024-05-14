import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/Slices/userSlice";
import movieReducer from "../store/Slices/movieSlice";
import gptReducer from "../store/Slices/gptSlice";
import configReducer from "../store/Slices/configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
