import { createSlice } from "@reduxjs/toolkit";

const weatherData = {
  city: "Ankara",
  heat: 40,
  precipitation: 0,
  moisture: 20,
  wind: 15,
  day: "Tuesday",
  weather: "Sunny",
  weekdays: [
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
    "Pazartesi",
    "Salı",
  ],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: weatherData,
  reducers: {},
  extraReducers: {},
});

export default weatherSlice.reducer;
