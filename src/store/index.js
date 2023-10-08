import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./features/weatherSlice";

const reducer = {
  weather: weatherSlice,
};

export const store = configureStore({
  reducer,
  devTools: true,
});
