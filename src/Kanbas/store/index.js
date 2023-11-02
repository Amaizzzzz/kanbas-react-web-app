import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";
const rootReducer = combineReducers({
  assignments: assignmentsReducer,
  modules: modulesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
