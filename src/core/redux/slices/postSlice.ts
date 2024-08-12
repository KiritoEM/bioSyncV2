import { IpostCard } from "@/helpers/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  posts: IpostCard[];
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
