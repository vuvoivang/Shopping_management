import { NavLink } from 'react-router-dom';

interface ProductItemProps {
  id: number;
  name: string;
  price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ id, name, price }: ProductItemProps) => {
  let dummy = '';
  return (
    <div className="product-item">
      <h1>Product Item {id}</h1>
      <p>Name Item {name}</p>
      <p>Price Item {price}</p>
      <NavLink to={`/products/${id}`}>
        <button type="button" className="product-item__detail">
          Detail
        </button>
      </NavLink>
    </div>
  );
};

export default ProductItem;
