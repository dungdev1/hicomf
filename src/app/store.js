import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '../pages/home/postsSlice';

export default configureStore({
  reducer: {
    posts: postsReducer
  }
});