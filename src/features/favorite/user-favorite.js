import { createSlice } from "@reduxjs/toolkit";

const listData = (key) => {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    console.log("Dữ liệu nhận được là " +  data);
    return Array.isArray(data) ? data.map(Number) : [];

  } catch {
    return [];
  }
};

const initialState = {
    listCourse: listData('listCourse'),
         listLike: listData('likeCourse'),


};

const useBehaviorCourse = createSlice({
  name: 'useBehaviorCourse',
  initialState,

  reducers: {
    addView: (state, action) => {
      const id = Number(action.payload);
      if (!state.listCourse.includes(id) ) {
             state.listCourse.push(id);

        localStorage.setItem('listCourse', JSON.stringify(state.listCourse));
      }
    },
    toggleLike: (state, action) => {
      const id = Number(action.payload);

      console.log("chỉ số id là : " + id);
          const index = state.listLike.indexOf(id);
      console.log(index);
      if (index !== -1) {
        state.listLike = state.listLike.filter(item => item !== id);
      } else {
        state.listLike.push(id);
      }

      localStorage.setItem('likeCourse', JSON.stringify(state.listLike));
    },

    removeView: (state, action) => {
      const id = Number(action.payload);
                console.log(id);

      state.listCourse = state.listCourse.filter(item => item !== id);
      localStorage.setItem('listCourse', JSON.stringify(state.listCourse));
    }
  }
});

export const { addView, toggleLike, removeView } = useBehaviorCourse.actions;
export default useBehaviorCourse.reducer;
