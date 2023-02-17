import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  // searchValue: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    // setSearchValue(state, action) {
    //   state.searchValue = action.payload;
    // },
  },
});

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
