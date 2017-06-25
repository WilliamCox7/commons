import { combineReducers } from 'redux';
import user from './reducers/userReducer';
import dial from './reducers/dialReducer';
import feed from './reducers/feedReducer';

export default combineReducers({
  user, dial, feed
});
