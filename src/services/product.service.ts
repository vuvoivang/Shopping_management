import { productList } from 'assets/dummy-data/product.data';

export const fetchProductList = new Promise(resolve => {
  resolve(productList);
});
export const fetchProductDetail = async (id: string) => {
  const foundIdx = productList.findIndex(product => product.id === Number(id));
  if (foundIdx === -1) {
    throw new Error('Product not found!!!');
  }
  return productList[foundIdx];
};
