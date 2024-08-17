import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Loading {
  loadingState: boolean;
  type?: "spinner" | "skeleton";
}

const initialState: Loading = {
  loadingState: false,
  type: "spinner",
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading: (
      state,
      action: PayloadAction<"spinner" | "skeleton" | undefined>
    ) => {
      state.loadingState = true;
      state.type = action.payload ?? "skeleton";
    },
    stopLoading: (state) => {
      state.loadingState = false;
    },
  },
});

export const { startLoading, stopLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
