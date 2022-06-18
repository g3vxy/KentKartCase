import { createSlice } from "@reduxjs/toolkit";
import stopsData from "../data/stops.json";

const initialState = {
  stops: stopsData,
};

export const stopSlice = createSlice({
  name: "stops",
  initialState,
});

export default stopSlice.reducer;
