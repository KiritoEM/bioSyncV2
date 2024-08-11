import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slices/loadingSlice";
import navReducer from "./slices/navSlice";
import postReducer from "./slices/postSlice";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    nav: navReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
