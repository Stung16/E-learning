import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleGetprofile } from "../../services/auth.service";

export const requestGetUserFromToken = createAsyncThunk(
    "auth/getUserFromToken",
    async () => {
      return await handleGetprofile();
    }
  );