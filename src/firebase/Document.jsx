import {
  collection,
  doc, getDoc,
  getDocs,
  getFirestore,
} from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import addItem from '../Redux/Item/ItemAction';

const Document = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const db = getFirestore();

    const itemRef = doc(db, 'items', 'mjAb4KZRSoXpKLVDNtZ5');
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log('Document data:', snapshot.data());
      } else {
        console.log('No such document!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });

    const itemsCollection = collection(db, 'items');
    getDocs(itemsCollection).then((snapshot) => {
      const items = snapshot.docs.map((item) => item.data());
      items.forEach((item) => dispatch(addItem(item)));
    });
  }, [dispatch]);

  return (
    <>
    </>
  );
};

export default Document;
