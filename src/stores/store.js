import { configureStore } from "@reduxjs/toolkit";
import { detailtSlice } from "./slices/detailtSlice";

export const store = configureStore({
  reducer: {
    detailtData:detailtSlice.reducer
  },
});
