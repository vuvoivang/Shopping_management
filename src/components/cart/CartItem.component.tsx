import { ProductInCart } from 'models/cart.model';
import { faPlusCircle, faMinusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CartItemProps {
  cart: ProductInCart;
  key: number;
}

const CartItem: React.FC<CartItemProps> = ({ cart: { name, price, image, detail, quantity } }: CartItemProps) => {
  const increaseQuantity = () => {
    console.log('increaseQuantity');
  };
  const decreaseQuantity = () => {
    console.log('decreaseQuantity');
  };
  const removeFromCart = () => {
    console.log('removeFromCart');
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
        <button type="button" className="c-cart-item__btn-decrease" onClick={increaseQuantity}>
          <FontAwesomeIcon icon={faMinusCircle} size="lg" />
        </button>
        <span className="c-cart-item__quantity">{quantity}</span>
        <button type="button" className="c-cart-item__btn-increase" onClick={decreaseQuantity}>
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
