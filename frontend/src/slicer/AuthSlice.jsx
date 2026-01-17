import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

const API = "http://127.0.0.1:8000/login/";



export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post(API, credentials);

      //decode
      const token = res.data.token; // adjust based on backend
      const decoded = jwtDecode(token);
      const expiryTime = decoded.exp * 1000;

      // store token
      localStorage.setItem("token", token);
      localStorage.setItem("expiry", expiryTime);

      return token;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.detail || "Invalid username or password"
      );
    }
  }
);     


const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    loading: false,
    error: null,
    isAuthenticated: !!localStorage.getItem("token"),
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.removeItem("expiry");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
         state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
