import { Product } from 'models/product.model';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from 'redux/cart';
import { displayToastify } from 'utilities/toastify/toastify.utility';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = (props: ProductItemProps) => {
  const { id, name, price, image, detail } = props.product;
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart(props.product));
    displayToastify('Add to cart successfully!!!', 'success', { autoClose: 300 });
  };
  return (
    <div className="c-product-item">
      <div className="c-product-item__card-item">
        <div>
          <img className="c-product-item__card-image" style={{ objectFit: 'contain' }} src={image} alt="Smart watch" height="250" />
          <div className="c-product-item__card-content">
            <div className="c-product-item__card-info">
              <h4>{name}</h4>
              <p>{detail}</p>
              <div className="c-product-item__card-price">{`${price}.000 VND`}</div>
            </div>
            <div className="c-product-item__action">
              <button type="button" className="c-product-item__add-to-cart" onClick={addToCart}>
                Add to cart
              </button>
              <NavLink to={`/products/${id}`}>
                <button type="button" className="c-product-item__detail">
                  Detail
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
