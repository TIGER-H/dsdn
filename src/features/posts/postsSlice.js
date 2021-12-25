import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    likePost: (state, action) => {
      const post = state.posts.find((post) => post.id === action.payload);
      post.numberOfLikes++;
    },
    unlikePost: (state, action) => {
      const post = state.posts.find((post) => post.id === action.payload);
      post.numberOfLikes--;
    },
  },
});

export const { setPosts, addPost, likePost, unlikePost } = postsSlice.actions;

export default postsSlice.reducer;
