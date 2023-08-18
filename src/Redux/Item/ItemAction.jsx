import {
  collection,
  getDocs,
  getFirestore,
} from 'firebase/firestore';

import { ADD_ITEM, FETCH_ITEMS_FAILURE, FETCH_ITEMS_SUCCESS } from './ActionTypes';

export const addItem = (item) => {
  return (dispatch, getState) => {
    const { items } = getState().items;
    if (!items.some((existingItem) => existingItem.id === item.id)) {
      dispatch({
        type: ADD_ITEM,
        payload: item,
      });
    }
  };
};

  export const fetchItemsFromFirebase = () => {
    return async (dispatch) => {
      const db = getFirestore();
      const itemsCollection = collection(db, 'items');
      getDocs(itemsCollection).then((snapshot) => {
        const items = snapshot.docs.map((item) => item.data());
        items.forEach((item) => dispatch(addItem(item)));
      });
    };
  };

// Action creator to dispatch success action
export const fetchItemsSuccess = (items) => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items,
  };
};

// Action creator to dispatch failure action
export const fetchItemsFailure = (error) => {
  return {
    type: FETCH_ITEMS_FAILURE,
    payload: error,
  };
};

  export default addItem;
