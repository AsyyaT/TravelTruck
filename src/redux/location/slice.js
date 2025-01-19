import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = locationSlice.actions;
export const selectQuery = (state) => state.location.query;
export const locationReducer = locationSlice.reducer;
