import { configureStore } from '@reduxjs/toolkit';
import product from './slices/product/productSlice';

export const store = configureStore({
  reducer: { product },
});
