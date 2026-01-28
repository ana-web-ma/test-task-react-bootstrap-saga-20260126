import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import { userApi } from './userApi';
import { fetchUserFailure, fetchUserPostsSuccess, fetchUserRequest, fetchUserSuccess, UserType } from './userSlice';
import { PostType } from 'modules/posts';

function* fetchUserSaga(action: ReturnType<typeof fetchUserRequest>) {
  try {
    const userId = action.payload;
    yield delay(1000);

    const [user, posts]: [UserType, PostType[]] = yield all([
      call(userApi.fetchUser, userId),
      call(userApi.fetchUserPost, userId),
    ]);

    yield put(fetchUserSuccess(user));
    yield put(fetchUserPostsSuccess(posts));
  } catch (error) {
    let errorMessage = 'Faoled to fetch user data';

    if (error instanceof Error) errorMessage = error.message;

    yield put(fetchUserFailure(errorMessage));
  }
}

function* userSaga() {
  yield takeLatest(fetchUserRequest.type, fetchUserSaga);
}

export default userSaga;
