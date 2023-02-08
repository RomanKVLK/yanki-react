import { createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from './asyncActions';

const initialState = {
  items: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.items = [];
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state) => {
      state.items = [];
    });
  },
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
