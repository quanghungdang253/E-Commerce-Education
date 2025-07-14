
// thực hiện thêm thư viên để tạo Redux Store một cách hiện đại 
import { configureStore } from "@reduxjs/toolkit";
import useReducer from './createSlice';


const store = configureStore({
        reducer: {
                cart: useReducer
        }
})

export default store;