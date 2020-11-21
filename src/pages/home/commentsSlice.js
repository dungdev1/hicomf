const {
  createEntityAdapter, 
  createAsyncThunk, 
  createSlice, 
  createSelector
} = require("@reduxjs/toolkit");

const commentsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.time.localeCompare(a.time)
});

const initialState = commentsAdapter.getInitialState({
  status: 'idle',
  error: null
});

export const fetchComments = createAsyncThunk('comments/fetchPosts', 
  async ({accessToken, url}) => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    });
    const data = await res.json();
    return data;
  }
);

export const addNewComment = createAsyncThunk('comments/addNewComment', 
  async ({accessToken, url, initialComment}) => {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(initialComment),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      }
    });
    const data = await res.json();
    return data;
  }
)

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchComments.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      commentsAdapter.upsertMany(state, action.payload);
    },
    [fetchComments.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message
    },
    [addNewComment.fulfilled]: commentsAdapter.addOne
  }
});

export default commentsSlice.reducer;

export const {
  selectAll: selectAllComments
} = commentsAdapter.getSelectors(state => state.comments);

export const selectCommentByPost = createSelector(
  [selectAllComments, (state, postId) => postId],
  (comments, postId) => comments.filter(comment => {
    return comment.post_id === postId;
  })
);