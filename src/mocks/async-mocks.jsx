const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description 1',
    price: 100,
    pictureUrl: 'https://via.placeholder.com/150',
    category: 'category1',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description 2',
    price: 200,
    pictureUrl: 'https://via.placeholder.com/150',
    category: 'category1',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description 3',
    price: 300,
    pictureUrl: 'https://via.placeholder.com/150',
    category: 'category1',
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Description 4',
    price: 400,
    pictureUrl: 'https://via.placeholder.com/150',
    category: 'category3',
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'Description 5',
    price: 500,
    pictureUrl: 'https://via.placeholder.com/150',
    category: 'category2',
  },
];

const categories = [
  { id: 'category1', name: 'Categoría 1' },
  { id: 'category2', name: 'Categoría 2' },
  { id: 'category3', name: 'Categoría 3' },
];

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
}

export function getCategories() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 500);
  });
}

export async function fetchProductById(id) {
  // Simulate an asynchronous API call delay
  // eslint-disable-next-line no-promise-executor-return
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Find the product with the specified ID
  const product = products.find((p) => p.id === id);

  if (product) {
    return product;
  }
  throw new Error('Product not found');
}
