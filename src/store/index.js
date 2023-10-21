import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./features/weatherSlice";
import themeReducer from "./features/themeSlice.js";

const reducer = {
  weather: weatherReducer,
  theme: themeReducer,
};

export const store = configureStore({
  reducer,
  devTools: true,
});
