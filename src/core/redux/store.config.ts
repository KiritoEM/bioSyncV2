import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slices/loadingSlice";
import navReducer from "./slices/navSlice";
import postReducer from "./slices/postSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    nav: navReducer,
    post: postReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
