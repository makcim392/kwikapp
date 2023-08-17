import { combineReducers } from '@reduxjs/toolkit';
import itemReducer from '../Item/ItemReducer';

const rootReducer = combineReducers({
  items: itemReducer,
});

export default rootReducer;
