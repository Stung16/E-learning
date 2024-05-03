import { configureStore } from "@reduxjs/toolkit";
import { detailtSlice } from "./slices/detailtSlice";
import { loginSlice } from "./slices/loginSlice";
import { tokenSlice } from "./slices/tokenSlice";
import { courseSlice } from "./slices/courseSlice";
import { searchSlice } from "./slices/searchSlice";
import { blogSlice } from "./slices/blogSlice";

export const store = configureStore({
  reducer: {
    detailtData: detailtSlice.reducer,
    loginData: loginSlice.reducer,
    tokenData: tokenSlice.reducer,
    courseData: courseSlice.reducer,
    searchData: searchSlice.reducer,
    blogData: blogSlice.reducer,
  },
});
