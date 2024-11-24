// src/redux/rootReducer.js

import { combineReducers } from 'redux';
import usersReducer from './usersSlice';
import roleReducer from './roleSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  roles: roleReducer,
});

export default rootReducer;
