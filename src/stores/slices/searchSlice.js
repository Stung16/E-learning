import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: false,
};
export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    updatestatus: (state, action) => {
      state.status = action.payload;
    },
  },
});
