import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      username: "johndoe",
      avatar:"",
      content:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quisquam. ",
      numberOfLikes: 0,
      comments: [],
      createAt: "2021-12-23 19:23:12",
    },
    {
      id: 2,
      username: "moleDAO",
      content: "Hello World!",
      numberOfLikes: 0,
      comments: [],
      createAt: "2021-12-23 15:00:00",
    },
    // {
    //   id: 3,
    //   username: "moleDAO",
    //   content: "Hello World!",
    //   numberOfLikes: 0,
    //   comments: [],
    //   createAt: "2021-12-23 15:00:00",
    // },
    // {
    //   id: 4,
    //   username: "moleDAO",
    //   content: "Hello World!",
    //   numberOfLikes: 0,
    //   comments: [],
    //   createAt: "2021-12-23 15:00:00",
    // },
    // {
    //   id: 5,
    //   username: "moleDAO",
    //   content: "Hello World!",
    //   numberOfLikes: 0,
    //   comments: [],
    //   createAt: "2021-12-23 15:00:00",
    // },
  ],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
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

export const { addPost, likePost, unlikePost } = postsSlice.actions;

export default postsSlice.reducer;
