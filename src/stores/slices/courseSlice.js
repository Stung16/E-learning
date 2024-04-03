import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isShow: true,
};
export const courseSlice = createSlice({
  name: "courseSlice",
  initialState,
  reducers: {
    updateShow: (state, action) => {
      state.isShow = action.payload;
    },
  },
});
