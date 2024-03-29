import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  profile: {},
  isLoading: false,
};
export const detailtSlice = createSlice({
  name: "detailtSlice",
  initialState,
  reducers: {
    updateLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    updateProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});
