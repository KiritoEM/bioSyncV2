import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Nav {
  navState: boolean;
}

const initialState: Nav = {
  navState: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    changeNavState: (state, action: PayloadAction<boolean>) => {
      state.navState = action.payload;
    },
    toogleNav: (state) => {
      state.navState = !state.navState;
    },
  },
});

//exporation
export const { changeNavState, toogleNav } = navSlice.actions;
export default navSlice.reducer;
