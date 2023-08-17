import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { fetchItemsFromFirebase } from '../../Redux/Item/ItemAction';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const dispatch = useDispatch();
  const itemsFromStore = useSelector((state) => state.items.items);

  useEffect(() => {
    setIsLoading(true);
    if (id) {
      // Fetch items from Firebase and update Redux store
      dispatch(fetchItemsFromFirebase())
        .then(() => {
          const filteredItem = itemsFromStore.find((p) => p.id === id);
          setItem(filteredItem || {});
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching items:', error);
          setIsLoading(false);
        });
    } else {
      setItem({});
      setIsLoading(false);
    }
  }, [id, dispatch]);

  return (
    <>
      {isLoading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <ItemDetail product={item} />
      )}
    </>
  );
};

export default ItemDetailContainer;
