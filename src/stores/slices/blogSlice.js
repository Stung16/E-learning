import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  blogs: true,
};
export const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    updateShow: (state, action) => {
      state.blogs = action.payload;
    },
  },
});
