import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  token: null || JSON.parse(localStorage.getItem("token")),
};
export const tokenSlice = createSlice({
  name: "tokenSlice",
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
      
    },
  },
});
