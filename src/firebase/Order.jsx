import { addDoc, getFirestore } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setOrderIdAction } from '../Redux/Order/OrderActions';

const sendOrderToFirebase = (order) => {
    const dispatch = useDispatch();
    const db = getFirestore();

  const ordersCollection = db.collection('orders');

  addDoc(ordersCollection, order).then(({ id }) => {
    dispatch(setOrderIdAction(id));
  });
  };

  export default sendOrderToFirebase;
