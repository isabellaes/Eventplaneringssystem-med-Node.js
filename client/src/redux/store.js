import { configureStore } from "@reduxjs/toolkit";
import organizerReducer from "./organizerSlice";

export const store = configureStore({
  reducer: {
    organizer: organizerReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
