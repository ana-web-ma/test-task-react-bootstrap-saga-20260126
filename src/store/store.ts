import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postsSlice } from 'modules/posts';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  posts: postsSlice,
});

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
