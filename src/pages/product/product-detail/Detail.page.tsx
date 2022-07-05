import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'models/product.model';
import { fetchProductDetail } from '../../../assets/dummy-data/product.data';

interface ParamTypes {
  productId: string;
}

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product>();
  const { productId } = useParams<ParamTypes>();
  const fetchData = async id => {
    const productDetail = await fetchProductDetail(id);
    setProduct(productDetail);
  };
  useEffect(() => {
    try {
      fetchData((productId as unknown) as string);
    } catch (err) {
      if (typeof err === 'string') {
        // eslint-disable-next-line no-alert
        alert(err.toUpperCase());
      } else if (err instanceof Error) {
        // eslint-disable-next-line no-alert
        alert(err.message);
      }
    }
  }, []);
  return (
    <div className="c-product-detail">
      {product && (
        <div className="c-product-detail__card-item">
          <div className="l_wrapper d-flex justify-content-around align-items-center">
            <div className="c-product-detail__image">
              <img className="u-object-fit--contain" alt="smart watch" src={product.image} height="300" />
            </div>
            <div className="c-product-detail__info">
              <h1 className="u-color--blue">{product.name}</h1>
              <p>{product.detail}</p>
              <div className="c-product-detail__card-price">{`${product.price}.000 VND`}</div>
              <div className="btn-group">
                <button type="button" className="c-product-detail__button-add-to-cart">
                  <FontAwesomeIcon icon={faPlusCircle} size="lg" /> Add to cart
                </button>

                <button type="button" className="c-product-detail__button-download-desc">
                  <a href={Number(product.id) % 2 === 0 ? '/files/EvenProduct.xlsx' : '/files/OddProduct.xlsx'} target="_self">
                    <FontAwesomeIcon icon={faDownload} size="lg" /> Down description file
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
