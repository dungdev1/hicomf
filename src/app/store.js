import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '../pages/home/postsSlice';
import commentsReducer from '../pages/home/commentsSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
  }
});