import { configureStore } from "@reduxjs/toolkit";
import { detailtSlice } from "./slices/detailtSlice";
import { loginSlice } from "./slices/loginSlice";
import { tokenSlice } from "./slices/tokenSlice";
import { courseSlice } from "./slices/courseSlice";

export const store = configureStore({
  reducer: {
    detailtData: detailtSlice.reducer,
    loginData: loginSlice.reducer,
    tokenData: tokenSlice.reducer,
    courseData: courseSlice.reducer,
  },
});
