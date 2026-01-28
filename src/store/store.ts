import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { postsReducer, postsSaga } from 'modules/posts';
import { commentsReducer, commentsSaga } from 'modules/comments';
import { userReducer, userSaga } from 'modules/user';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  user: userReducer,
});

function* rootSaga() {
  yield all([postsSaga(), commentsSaga(), userSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
