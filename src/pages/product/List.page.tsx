import ProductItem from '../../components/product/ProductItem.component';

const ProductList: React.FC = () => {
  let productList = [
    { id: 1, name: 'A', price: 10000 },
    { id: 2, name: 'B', price: 15000 },
    { id: 3, name: 'C', price: 12000 }
  ];
  return (
    <div className="product-list">
      <h1>Product List</h1>
      <div className="product-list__list">
        {productList.map(item => (
          <div key={item.id}>
            <ProductItem id={item.id} name={item.name} price={item.price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
