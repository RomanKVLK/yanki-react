import { configureStore } from '@reduxjs/toolkit';
import product from './slices/product/productSlice';
import filter from './slices/filter/filterSlice';
import cart from './slices/cart/cartSlice';

export const store = configureStore({
  reducer: { filter, product, cart },
});
