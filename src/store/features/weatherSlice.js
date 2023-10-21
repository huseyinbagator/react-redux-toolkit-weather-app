import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import getCityWeather from "../../api/weather";

const initialState = {
  name: "",
  main: {
    feels_like: 0,
  },
  wind: {
    speed: 0,
  },
  weather: [
    {
      main: "",
      description: "",
    },
  ],
};

export const getWeather = createAsyncThunk("getWeather", getCityWeather);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.main.feels_like = action.payload.main.feels_like;
        state.weather[0].main = action.payload.weather[0].main;
        state.weather[0].description = action.payload.weather[0].description;
        state.wind.speed = action.payload.wind.speed;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.name = "City not found";
        state.main.feels_like = 0;
        state.weather[0].main = "";
        state.weather[0].description = "";
        state.wind.speed = 0;
      })
      .addCase(getWeather.pending, (state, action) => {
        state.name = "Loading...";
        state.main.feels_like = 0;
        state.weather[0].main = "";
        state.weather[0].description = "";
        state.wind.speed = 0;
      });
  },
});

export default weatherSlice.reducer;
