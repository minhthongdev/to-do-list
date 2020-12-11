import { createStore, combineReducers } from "redux";
import jobList from './reducers/jobList'
import selectedJob from './reducers/selectedJob'
const reducer = combineReducers({
    jobList,
    selectedJob, 


});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
