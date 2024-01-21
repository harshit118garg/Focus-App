import { configureStore } from "@reduxjs/toolkit";
import IdeasReducer from "./slice";

export const store = configureStore({
  reducer: {
    getIdeas: IdeasReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
