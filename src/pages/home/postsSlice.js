import {
  createSlice, 
  createAsyncThunk,
  createEntityAdapter,
  createSelector
} from "@reduxjs/toolkit";

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.time.localeCompare(a.time)
});

// generates an empty {ids: [], entities: {}} and pass some fields.
const initialState = postsAdapter.getInitialState({
  status: 'idle',
  error: null
});


const url = process.env.REACT_APP_SERVER_URL + '/api/v1/posts/';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', 
  async accessToken => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    })
    const data = await res.json();
    return data;
  }
);

export const addNewPost = createAsyncThunk('posts/addNewPost',
  async ({accessToken, initialPost}) => {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(initialPost),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      }
    });
    const data = await res.json();
    return data;
  }
);

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
      state.status = 'succeeded';

      // Add any fetched posts to the array
      postsAdapter.upsertMany(state, action.payload)
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message
    },
    [addNewPost.fulfilled]: postsAdapter.addOne
  }
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds
} = postsAdapter.getSelectors(state => state.posts);

export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, profileId) => profileId],
  (posts, profileId) => posts.filter(post => {
    const nameList = post.profile.split("/").filter(item => item !== "");
    return nameList[nameList.length - 1] === profileId;
  })
);