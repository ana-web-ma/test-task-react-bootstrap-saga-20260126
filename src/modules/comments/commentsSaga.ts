import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { CommentType, fetchCommentsFailure, fetchCommentsRequest, fetchCommentsSuccess } from './commentsSlice';
import { commentsApi } from './commentApi';

function* fetchCommentsSaga(action: ReturnType<typeof fetchCommentsRequest>) {
  try {
    const postId = action.payload;
    yield delay(1000);

    const comments: CommentType[] = yield call(commentsApi.fetchComments, postId);
    yield put(fetchCommentsSuccess({ postId, comments }));
  } catch (error) {
    let errorMessage = 'Failed to fetch comments';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    yield put(fetchCommentsFailure({ postId: action.payload, error: errorMessage }));
  }
}

function* commentsSaga() {
  yield takeEvery(fetchCommentsRequest.type, fetchCommentsSaga);
}

export default commentsSaga;
