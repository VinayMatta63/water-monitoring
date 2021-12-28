import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  userDetails: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    removeUser: (state) => {
      state.userId = null;
      state.userDetails = null;
    },
  },
});

export const { setUser, removeUser, setUserDetails } = userSlice.actions;

export const userSelector = (state) => state.user.userId;

export default userSlice.reducer;
