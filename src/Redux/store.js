import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './Item/ItemReducer';

const store = configureStore( {
    reducer: itemReducer,
} );

export default store;
