// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import counterReducer from './counterReducer';
import authenticatorReducer from "./authenticatorReducer";
// Redux: Root Reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authenticatorReducer
});
// Exports
export default rootReducer;