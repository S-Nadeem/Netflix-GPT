import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showgptSearch: false,
  },
  reducers: {
    addgptSearch: (state) => {
      state.showgptSearch = !state.showgptSearch;
    },
  },
});

export const { addgptSearch } = gptSlice.actions;

export default gptSlice.reducer;
