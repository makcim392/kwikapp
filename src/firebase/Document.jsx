import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect } from 'react';

const Document = () => {
  useEffect(() => {
    const db = getFirestore();

    const itemRef = doc(db, 'items', 'user1');
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log('Document data:', snapshot.data());
      } else {
        console.log('No such document!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
  }, []);

  return (
    <div>Document</div>
  );
};

export default Document;
