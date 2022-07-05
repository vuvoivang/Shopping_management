import { Product } from 'models/product.model';
import { NavLink } from 'react-router-dom';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product: { id, name, price, image, detail } }: ProductItemProps) => (
  <div className="c-product-item">
    <div className="c-product-item__card-item">
      <div>
        <img className="c-product-item__card-image u-object-fit--contain" src={image} alt="Smart watch" height="250" />
        <div className="c-product-item__card-content">
          <div className="c-product-item__card-info">
            <h4>{name}</h4>
            <p>{detail}</p>
            <div className="c-product-item__card-price">{`${price}.000 VND`}</div>
          </div>
          <NavLink to={`/products/${id}`}>
            <button type="button" className="c-product-item__detail">
              Detail
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);
export default ProductItem;
