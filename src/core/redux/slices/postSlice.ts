import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  posts: any[];
}

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, actions: PayloadAction<any>) => {
      state.posts = actions.payload;
    },
  },
});

export const { setPost } = postSlice.actions;
export default postSlice.reducer;
