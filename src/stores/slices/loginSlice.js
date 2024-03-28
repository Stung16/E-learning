import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  state: "",
  login: null,
};
export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    updateState: (state, action) => {
      state.state = action.payload;
    },
    updateLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});
