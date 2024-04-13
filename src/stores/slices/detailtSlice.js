import { createSlice } from "@reduxjs/toolkit";
import { requestGetUserFromToken } from "../middlewares/auth.middleware";
const initialState = {
  profile: null,
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
  extraReducers: (builder) => {
    builder.addCase(requestGetUserFromToken.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(requestGetUserFromToken.rejected, (state) => {
      state.isLoading = true;
    });
    builder.addCase(requestGetUserFromToken.fulfilled, (state, action) => {
      state.profile = action?.payload?.data;
      state.isLoading = false;
    });
  },
});
