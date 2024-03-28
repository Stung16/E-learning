import { configureStore } from "@reduxjs/toolkit";
import { detailtSlice } from "./slices/detailtSlice";
import { loginSlice } from "./slices/loginSlice";
import { tokenSlice } from "./slices/tokenSlice";

export const store = configureStore({
  reducer: {
    detailtData: detailtSlice.reducer,
    loginData: loginSlice.reducer,
    tokenData: tokenSlice.reducer,
  },
});
