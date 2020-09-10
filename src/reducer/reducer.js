import { combineReducers } from 'redux';
import githubReducer from './githubReducer';

const reducer = combineReducers({
  githubReducer,
});
export default reducer;
