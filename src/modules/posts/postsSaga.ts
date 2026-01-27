import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { fetchPostsFailure, fetchPostsRequest, fetchPostsSuccess, PostType } from './postsSlice';
import { postsApi } from './postsApi';

function* fetchPostsSaga() {
  try {
    yield delay(1000);

    const posts: PostType[] = yield call(postsApi.fetchPosts);
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    let errorMessage = 'Failed to fetch posts';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    yield put(fetchPostsFailure(errorMessage));
  }
}

function* postsSaga() {
  yield takeLatest(fetchPostsRequest.type, fetchPostsSaga);
}

export default postsSaga;
