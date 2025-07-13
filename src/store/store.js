import { configureStore } from "@reduxjs/toolkit";

import useFavorite from '../features/favorite/user-favorite';
import useCoursesSlice from '../features/course/courses-slice';
import cartReducer from '../features/cart/cart-slice';
const store = configureStore({
    reducer: {
         courses: useCoursesSlice,
          useFavorite: useFavorite,
           cart: cartReducer, 
    }
});

export default store;