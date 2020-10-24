import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";

import { usePostApi } from '../../hooks/usePostAPI';

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.time.localeCompare(a.time)
});

const initialState = postsAdapter.getInitialState({
  status: 'idle',
  error: null
});

const url = process.env.REACT_APP_SERVER_URL + '/api/v1/posts/';
const options = { audience: process.env.REACT_APP_AUTH0_AUDIENCE }

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const data = usePostApi(url, options);
  return data;
});

// Create a "slice" contains the logic and actions.
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducer: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      postsAdapter.upsertMany(state, action.payload);
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message
    },
  }
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds
} = postsAdapter.getSelectors(state => state.posts);