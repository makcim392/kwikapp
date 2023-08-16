import {
  collection,
  doc, getDoc,
  getDocs,
  getFirestore,
} from 'firebase/firestore';
import React, { useEffect } from 'react';

const Document = () => {
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
      console.log('itemsCollection', snapshot.docs.map((item) => item.data()));
    });
  }, []);

  return (
    <div>Document</div>
  );
};

export default Document;
