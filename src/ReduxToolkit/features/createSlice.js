
import { createSlice } from "@reduxjs/toolkit";

 
//thực hiện khởi tạo action và reducer cùng một lúc với phương thức createSlice

const cart = createSlice({
    //  name : tên của slice là tên của module thường dùng để quản lý 
    name: 'cart',
    initialState: {
        cart: 0
    },
    reducers: {
        // state trong redux dùng để quản lý trang thái dữ liệu hiện tại 
        // action là nơi chưa dữ liệu bổ sung 
        increment: (state,action) => {
                    state.cart += 1;
        },
        decrement: (state,action) => {
                    state.cart -= 1;
        }
    }

})



export  const {increment ,decrement}  = cart.actions;
export default cart.reducer;