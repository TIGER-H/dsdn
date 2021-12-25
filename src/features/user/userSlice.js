import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountId: "",
  username: "",
  uId: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.accountId = action.payload.accountId;
      state.username = action.payload.username;
      state.uId = action.payload.uId;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
