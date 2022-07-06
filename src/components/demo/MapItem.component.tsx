import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Product } from 'models/product.model';

interface MapItemProps {
  product: Product;
  key: number;
  index: number;
  handleRemoveItem: (index: number) => void;
}

const MapItem: React.FC<MapItemProps> = (props: MapItemProps) => {
  const { name, price, image, detail } = props.product;
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
      <button type="button" className="c-map-item__btn-remove" onClick={removeFromCart}>
        <FontAwesomeIcon icon={faTrash} size="lg" />
      </button>
    </div>
  );
};
export default MapItem;
