import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./features/weatherSlice";

const reducer = {
  weather: weatherReducer,
};

export const store = configureStore({
  reducer,
  devTools: true,
});
