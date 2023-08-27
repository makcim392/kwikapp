import { addDoc, getFirestore } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setOrderId } from '../Redux/Order/OrderActions';

const sendOrderToFirebase = (order) => {
    const dispatch = useDispatch();
    const db = getFirestore();

  /*  Convert the date property to a serializable format
 This is necessary because the date property is a Date object
  and Firestore does not accept Date objects */
  // const serializableOrder = {
  //   ...order,
  //   date: order.date.toISOString(),
  // };

  const ordersCollection = db.collection('orders');

  console.log('non serializableOrder', order);

  addDoc(ordersCollection, order).then(({ id }) => {
    // console.log('order id in add doc', id);
    dispatch(setOrderId(id));
  });
  };

  export default sendOrderToFirebase;
