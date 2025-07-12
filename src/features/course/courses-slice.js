// src/features/course/coursesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

 const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const responseData = await axios.get('/data/products.json');
  console.log(responseData.data);
  return responseData.data;
});

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
              .addCase(fetchCourses.pending, (state) => {
                    state.loading = true;
      })

      .addCase(fetchCourses.fulfilled, (state, action) => {
                  state.loading = false;
             state.data = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;

                state.error = action.error.message;
      });
  }
});

export default coursesSlice.reducer;
