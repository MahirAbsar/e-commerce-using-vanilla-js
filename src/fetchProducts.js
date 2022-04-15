import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch((err) => console.log(err));
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  return response;
};

export default fetchProducts;
