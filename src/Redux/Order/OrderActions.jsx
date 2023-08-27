import { ADD_ORDER, SET_ORDER_ID } from './ActionTypes';

 const addOrderAction = (order) => {
  return {
    type: ADD_ORDER,
    payload: order,
  };
};

export const setOrderIdAction = (orderId) => {
  return {
    type: SET_ORDER_ID,
    payload: orderId,
  };
};

export default addOrderAction;
