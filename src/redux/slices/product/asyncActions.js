import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk('product/fetchProductStatus', async (params) => {
  const { currentPage, categoryId, search } = params;
  const { data } = await axios.get(
    `https://63e903085f3e35d898f94b79.mockapi.io/items?limit=9&page=${currentPage}&${
      categoryId > 0 ? `category=${categoryId}` : ''
    }${search}`,
  );
  return data;
});
