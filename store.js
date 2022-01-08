import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/user';
import loginReducer from './reducers/login';
import postReducer from './reducers/post';
import commentReducer from './reducers/comment';
import notificationReducer from './reducers/notification';

const reducers = combineReducers({
  login: loginReducer,
  posts: postReducer,
  comments: commentReducer,
  notification: notificationReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
