import { ADD_ORDER, SET_ORDER_ID } from './ActionTypes';

const initialState = {
  order: {},
  orderID: '',
};
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        order: action.payload,
      };
      case SET_ORDER_ID:
        return {
          ...state,
          orderID: action.payload,
        };
    default:
      return state;
  }
};

export default orderReducer;
