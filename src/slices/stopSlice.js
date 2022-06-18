import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stops: [],
};

export const stopSlice = createSlice({
  name: "stops",
  initialState,
  reducers: {
    setStops: (state, action) => {
      state.stops = action.payload;
    },
  },
});

export const { setStops } = stopSlice.actions;

export default stopSlice.reducer;
