import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import getCityWeather from "../../api/weather";

const initialState = {};

export const getWeather = createAsyncThunk("getWeather", getCityWeather);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, action) => {
      console.log(action.payload.wind);
      state.name = action.payload.name;
      state.wind = action.payload.wind;
    });
  },
});

export default weatherSlice.reducer;
