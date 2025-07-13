import { createSlice } from "@reduxjs/toolkit";


const loadData = () => {
    try {
         const data = localStorage.getItem("element");
         console.log("dữ liệu nhận được là " + data);
         return data ? JSON.parse(data) : [];
    }catch {
         return [];
    }
}


const saveData = (item) => {
     try {
        localStorage.setItem("element", JSON.stringify(item));

     }catch (e){
        console.error("Lỗi lưu localStorage ", e);
     }
};


const cart = createSlice({
    name: 'cart',
    initialState: {
        items: loadData()
    },
    reducers: {
        addCart: (state,action) => {
            const product = action.payload;
            console.log("product "+ product);
            const exit = state.items.find(item => item.id === product.id);

            if(!exit) {
                state.items.push(product);
                saveData(state.items);
            }   
        },
        removeCart: (state,action) => {
                const id = action.payload;
                console.log(id);

                state.items = state.items.filter(item => item.id !== id);
                saveData(state.items);
        },
        deleteCart: (state) => {
                state.items = [];
                saveData([]);
        }

    }
})

export const {addCart , removeCart , deleteCart} = cart.actions;
export default cart.reducer;