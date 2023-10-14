import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const KEY = "KEY";
const initialState = {};

export const getWeather = createAsyncThunk("getWeather", async (city) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
  );
  console.log(data);
  return data;
});

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
