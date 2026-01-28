import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostType } from 'modules/posts';

export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

interface UserState {
  user: UserType | null;
  userPosts: PostType[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  userPosts: [],
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchUserRequest: (state, action: PayloadAction<number>) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchUserPostsSuccess: (state, action: PayloadAction<PostType[]>) => {
      state.userPosts = action.payload;
    },
    fetchUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.user = null;
      state.userPosts = [];
    },
  },
});

export const { fetchUserFailure, fetchUserRequest, fetchUserSuccess, fetchUserPostsSuccess } = userSlice.actions;

export default userSlice.reducer;
