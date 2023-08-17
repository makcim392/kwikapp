import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const { id } = useParams();
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const itemsFromStore = useSelector((state) => state.items.items);
  console.log('itemsFromStore: ', itemsFromStore);

  React.useEffect(() => {
    setIsLoading(true); // Set loading state

    // Check if id parameter is present
    if (id) {
      // Filter the products when the itemsFromStore changes
      const filteredItems = itemsFromStore.filter((p) => p.category === id);

      setFilteredProducts(filteredItems);
    } else {
      // Show all items without filtering
      setFilteredProducts(itemsFromStore);
    }

    setIsLoading(false); // Set loading state to false once data is fetched
  }, [id, itemsFromStore]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {filteredProducts.length > 0 && <ItemList products={filteredProducts} />}
        </>
      )}
    </>
  );
};

export default ItemListContainer;
