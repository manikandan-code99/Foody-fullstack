import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../slicer/testSlicer'
import testuserReducer from '../slicer/testSlicer'
import authReducer from '../slicer/AuthSlice'
import foodlistReducer from '../slicer/FoodCreateSlice'


export const store = configureStore({
    devTools:true,
    reducer: {
        auth:authReducer,
        testuser:testuserReducer,
        foodlist:foodlistReducer,
    }
})

