import { combineReducers } from 'redux';
import user from './reducers/userReducer';
import dial from './reducers/dialReducer';

export default combineReducers({
  user, dial
});
