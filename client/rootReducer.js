import { combineReducers } from 'redux';
import user from './reducers/userReducer';
import dial from './reducers/dialReducer';
import feed from './reducers/feedReducer';
import chat from './reducers/chatReducer';

export default combineReducers({
  user, dial, feed, chat
});
