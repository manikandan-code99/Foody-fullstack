import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axios";

export const fetchtestuser = createAsyncThunk(
  "testuser/fetch",
  async () => {
    const res = await axiosInstance.get("tasks/");
    return res.data;
  }
);


const testslice =createSlice({
    name:"testuser",
    initialState:{
        data:[],
        isloading:false,
        error:null
    },

    extraReducers:(builder)=>{
        builder
        .addCase(fetchtestuser.pending,(state)=>{state.isloading=true})
        .addCase(fetchtestuser.fulfilled,(state,action)=>{state.isloading=false 
            state.data=action.payload})
        .addCase(fetchtestuser.rejected,(state)=>{state.error="data error"})
    }
})


export default testslice.reducer;