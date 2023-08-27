import { ADD_ORDER, SET_ORDER_ID } from './ActionTypes';

 const addOrder = (order) => {
  console.log('order in addOrder in order actions', order);
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

export default addOrder;
