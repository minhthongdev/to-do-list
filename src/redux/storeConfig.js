import { createStore, combineReducers } from "redux";
import jobList from './reducers/jobList'
const reducer = combineReducers({
    jobList,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
