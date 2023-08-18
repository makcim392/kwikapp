import {
  collection,
  getDocs,
  getFirestore,
} from 'firebase/firestore';
import { addItem } from './ItemAction';

const initialState = {
    items: [], // Initialize an empty array to store the items
  };

  const itemReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
        case 'FETCH_ITEMS_SUCCESS':
          return {
            ...state,
            items: action.payload,
            error: null,
          };
        case 'FETCH_ITEMS_FAILURE':
          return {
            ...state,
            error: action.payload,
          };
      default:
        return state;
    }
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

  export default itemReducer;
