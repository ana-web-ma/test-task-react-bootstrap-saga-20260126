import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PostType {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostsState {
  posts: PostType[] | null;
  loading: boolean;
  error: null | string;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action: PayloadAction<PostType[]>) => {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchPostsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } = postsSlice.actions;
export default postsSlice.reducer;
