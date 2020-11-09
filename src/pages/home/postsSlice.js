import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: 'idle',
  error: null
};

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
      state.status = 'succeeded'
      state.posts = state.posts.concat(action.payload);
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message
    },
    [addNewPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
    }
  }
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = state => state.posts.posts;
export const selectPostById = (state, postId) => {
  return state.posts.posts.find(post => post.id === postId);
};
export const selectPostsByUser = (state, profielId) => {
  return state.posts.posts.filter(post => {
    const nameList = post.profile.split("/").filter(item => item !== "");
    return nameList[nameList.length - 1] === profielId;
  });
}