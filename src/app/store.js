import { configureStore } from '@reduxjs/toolkit';
import { postListReducer } from '../features/PostsList/postListSlice';
import { fullPostReducer } from '../features/FullPost/fullPostSlice';


export const store = configureStore({
  reducer: {
    postList: postListReducer,
    fullPost: fullPostReducer
  },
});
