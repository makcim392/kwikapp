import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
   const [item, setItem] = useState({});
   const [isLoading, setIsLoading] = React.useState(true);

  const { id } = useParams();

  const itemsFromStore = useSelector((state) => state.items.items);
  console.log('itemsFromStore: ', itemsFromStore);

  React.useEffect(() => {
    setIsLoading(true);
  if (id) {
    const filteredItem = itemsFromStore.find((p) => p.id === parseInt(id, 10)); console.log('filteredItem: ', filteredItem);
    setItem(filteredItem);
  } else {
    setItem({});
  }
  setIsLoading(false);
  }, [id, itemsFromStore]);

  console.log('product sent from ItemDetailContainer: ', item);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
    ) : (
      <>
        <ItemDetail
          product={item}
        />
      </>
      )}
    </>
  );
};

export default ItemDetailContainer;
