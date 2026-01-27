import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentsState {
  commentsByPostId: {
    [postId: number]: {
      comments: CommentType[];
      loading: boolean;
      error: string | null;
    };
  };
}

const initialState: CommentsState = {
  commentsByPostId: {},
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    fetchCommentsRequest: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      if (!state.commentsByPostId[postId]) {
        state.commentsByPostId[postId] = {
          comments: [],
          loading: true,
          error: null,
        };
      } else {
        state.commentsByPostId[postId].loading = true;
        state.commentsByPostId[postId].error = null;
      }
    },

    fetchCommentsSuccess: (state, action: PayloadAction<{ postId: number; comments: CommentType[] }>) => {
      const { postId, comments } = action.payload;
      if (!state.commentsByPostId[postId]) {
        state.commentsByPostId[postId] = {
          comments,
          loading: false,
          error: null,
        };
      } else {
        state.commentsByPostId[postId].comments = comments;
        state.commentsByPostId[postId].loading = false;
      }
    },

    fetchCommentsFailure: (state, action: PayloadAction<{ postId: number; error: string }>) => {
      const { postId, error } = action.payload;
      if (state.commentsByPostId[postId]) {
        state.commentsByPostId[postId].loading = false;
        state.commentsByPostId[postId].error = error;
      }
    },

    clearComments: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      delete state.commentsByPostId[postId];
    },
  },
});

export const { fetchCommentsRequest, fetchCommentsSuccess, fetchCommentsFailure, clearComments } =
  commentsSlice.actions;

export default commentsSlice.reducer;
