import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import userReducer from "../features/user/userSlice";
import { imageApi } from "../service/imageService";
import { postApi } from "../service/postService";
import { userApi } from "../service/userService";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(postApi.middleware)
      .concat(imageApi.middleware),
});
