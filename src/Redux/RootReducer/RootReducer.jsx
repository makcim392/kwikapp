import { combineReducers } from '@reduxjs/toolkit';
import itemReducer from '../Item/ItemReducer';
import orderReducer from '../Order/OrderReducer';

const rootReducer = combineReducers({
  items: itemReducer,
  orderReducer,
});

export default rootReducer;
