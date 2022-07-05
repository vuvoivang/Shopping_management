import { ProductInCart } from 'models/cart.model';
import { faPlusCircle, faMinusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { cartActions } from 'redux/cart';

interface CartItemProps {
  cartItem: ProductInCart;
  key: number;
}

const CartItem: React.FC<CartItemProps> = (props: CartItemProps) => {
  const dispatch = useDispatch();
  const { id, name, price, image, detail, quantity } = props.cartItem;
  const increaseQuantity = () => {
    dispatch(cartActions.increaseNumber(id));
  };
  const decreaseQuantity = () => {
    dispatch(cartActions.decreaseNumber(id));
  };
  const removeFromCart = () => {
    dispatch(cartActions.deleteFromCart(props.cartItem));
  };
  return (
    <div className="c-cart-item">
      <img className="c-cart-item__image" src={image} alt="Smart watch" height="120" />
      <div className="c-cart-item__info">
        <h4>{name}</h4>
        <p>{detail}</p>
      </div>
      <div className="c-cart-item__price">{`${price}.000 Đ`}</div>
      <div className="c-cart-item__action">
        <button type="button" className="c-cart-item__btn-decrease" onClick={decreaseQuantity}>
          <FontAwesomeIcon icon={faMinusCircle} size="lg" />
        </button>
        <span className="c-cart-item__quantity">{quantity}</span>
        <button type="button" className="c-cart-item__btn-increase" onClick={increaseQuantity}>
          <FontAwesomeIcon icon={faPlusCircle} size="lg" />
        </button>
      </div>
      <button type="button" className="c-cart-item__btn-remove" onClick={removeFromCart}>
        <FontAwesomeIcon icon={faTrash} size="lg" />
      </button>
    </div>
  );
};
export default CartItem;
