import { createSlice } from '@reduxjs/toolkit';




const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setByNameFilter(state, action) {
     return state = action.payload;
    },
  },
});

export const { setByNameFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

