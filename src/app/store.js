import { configureStore } from '@reduxjs/toolkit';
import { postListReducer } from '../features/PostsList/postListSlice';


export const store = configureStore({
  reducer: {
    postList: postListReducer
  },
});
