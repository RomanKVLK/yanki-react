import { configureStore } from '@reduxjs/toolkit';
import product from './slices/product/productSlice';
import filter from './slices/filter/filterSlice';

export const store = configureStore({
  reducer: { filter, product },
});
