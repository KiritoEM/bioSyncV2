import { Iuser } from "@/helpers/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  user: Iuser | null;
}

const initialState: User = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, actions: PayloadAction<Iuser>) => {
      state.user = actions.payload;
    },
  },
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
