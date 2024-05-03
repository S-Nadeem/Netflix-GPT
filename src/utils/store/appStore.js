import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/Slices/userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
