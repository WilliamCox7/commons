import { combineReducers } from 'redux';
import walkthrough from './walkthroughReducer';
import feed from './feedReducer';

export default combineReducers({
  walkthrough, feed
});
