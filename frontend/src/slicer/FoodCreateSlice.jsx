import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api/axios";

export const fetchfoodlist = createAsyncThunk(
  "foodlist/fetch",
  async () => {
    const res = await axiosInstance.get("public_food_list/");
    return res.data;
  }
);


const foodlist =createSlice({
    name:"foodlist",
    initialState:{
        data:[],
        isloading:false,
        error:null
    },

    extraReducers:(builder)=>{
        builder
        .addCase(fetchfoodlist.pending,(state)=>{state.isloading=true})
        .addCase(fetchfoodlist.fulfilled,(state,action)=>{state.isloading=false 
            state.data=action.payload})
        .addCase(fetchfoodlist.rejected,(state)=>{state.error="data error"})
    }
})


export default foodlist.reducer;