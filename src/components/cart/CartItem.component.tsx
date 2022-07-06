import { ProductInCart } from 'models/cart.model';
import { faPlusCircle, faMinusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { cartActions } from 'redux/cart';
import { useEffect, useState } from 'react';

interface CartItemProps {
  cartItem: ProductInCart;
  key: number;
}

const CartItem: React.FC<CartItemProps> = (props: CartItemProps) => {
  const dispatch = useDispatch();
  const { id, name, price, image, detail, quantity } = props.cartItem;
  const [quantityState, setQuantityState] = useState<string | number>(quantity);
  const increaseQuantity = () => {
    dispatch(cartActions.increaseNumber(id));
  };
  const decreaseQuantity = () => {
    dispatch(cartActions.decreaseNumber(id));
  };
  const removeFromCart = () => {
    dispatch(cartActions.deleteFromCart(props.cartItem));
  };
  const handleOnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.validity.valid) return;
    // eslint-disable-next-line no-param-reassign
    event.target.value = '';
  };
  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    dispatch(cartActions.changeNumber({ id, newQuantity: Number(event.target.value) }));
  };
  const handleOnChange = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value.length === 0) setQuantityState('');
    else setQuantityState(Number(event.target.value));
  };
  useEffect(() => {
    setQuantityState(quantity);
  }, [quantity]);
  return (
    <div className="c-cart-item">
      <img className="c-cart-item__image" src={image} alt="Smart watch" height="120" />
      <div className="c-cart-item__info">
        <h4>{name}</h4>
        <p>{detail}</p>
      </div>
      <div className="c-cart-item__price">{`${price}.000 Đ`}</div>
      <div className="c-cart-item__action">
        <button type="button" className="c-cart-item__btn-decrease" disabled={quantity < 2} onClick={decreaseQuantity}>
          <FontAwesomeIcon icon={faMinusCircle} size="lg" />
        </button>
        <input className="c-cart-item__quantity" type="number" min="1" step="1" value={quantityState} onInput={handleOnInput} onBlur={handleOnBlur} onChange={handleOnChange} />
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
