import { configureStore } from "@reduxjs/toolkit";

import useFavorite from '../features/favorite/user-favorite';
import useCoursesSlice from '../features/course/courses-slice';

const store = configureStore({
    reducer: {
        useCoursesSlice: useCoursesSlice,
         useFavorite: useFavorite
    }
});

export default store;