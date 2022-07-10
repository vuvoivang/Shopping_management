import { faTrash, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Product } from 'models/product.model';

interface MapItemProps {
  product: Product;
  key: number;
  index: number;
  handleRemoveItem: (index: number) => void;
}

const MapItem: React.FC<MapItemProps> = (props: MapItemProps) => {
  const { name, price, image, detail } = props.product;
  const [quantity, setQuantity] = useState<number | string>(1);

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };
  const handleOnChange = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value.length === 0) setQuantity('');
    else setQuantity(Number(event.target.value));
  };
  const handleOnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.validity.valid) return;
    // eslint-disable-next-line no-param-reassign
    event.target.value = '';
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => Number(prevQuantity) + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => Number(prevQuantity) - 1);
    }
  };
  const removeFromCart = () => {
    props.handleRemoveItem(props.index);
  };

  return (
    <div className="c-map-item">
      <img className="c-map-item__image" src={image} alt="Smart watch" height="120" />
      <div className="c-map-item__info">
        <h4>{name}</h4>
        <p>{detail}</p>
      </div>
      <div className="c-map-item__price">{`${price}.000 Đ`}</div>
      <div className="c-map-item__handle">
        <div className="c-map-item__action">
          <button type="button" className="c-map-item__btn-decrease" disabled={quantity < 2} onClick={decreaseQuantity}>
            <FontAwesomeIcon icon={faMinusCircle} size="lg" />
          </button>
          <input className="c-map-item__quantity" type="number" min="1" step="1" value={quantity} onInput={handleOnInput} onBlur={handleOnBlur} onChange={handleOnChange} />
          <button type="button" className="c-map-item__btn-increase" onClick={increaseQuantity}>
            <FontAwesomeIcon icon={faPlusCircle} size="lg" />
          </button>
        </div>
        <button type="button" className="c-map-item__btn-remove" onClick={removeFromCart}>
          <FontAwesomeIcon icon={faTrash} size="lg" />
        </button>
      </div>
    </div>
  );
};
export default MapItem;
