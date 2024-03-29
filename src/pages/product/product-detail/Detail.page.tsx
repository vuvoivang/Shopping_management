import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'models/product.model';
import { cartActions } from 'redux/cart';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { displayToastify } from 'utilities/toastify/toastify.utility';
import { fetchProductDetail } from 'services/product.service';
import Helmet from 'react-helmet';

interface ParamTypes {
  productId: string;
}

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product>();
  const dispatch = useDispatch();
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
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(product);
  }, [product]);
  const addToCart = () => {
    dispatch(cartActions.addToCart(product));
    displayToastify('Add to cart successfully!!!', 'success');
  };
  return (
    <div className="c-product-detail">
      {product && (
        <>
          <Helmet title={product.name} />
          <div className="c-product-detail__card-item">
            <div className="l_wrapper d-flex justify-content-around align-items-center">
              <div className="c-product-detail__image">
                <img className="u-object-fit--contain" alt="smart watch" src={product.image} height="300" />
              </div>
              <div className="c-product-detail__info">
                <h1 className="u-color--blue">{product.name}</h1>
                <p>{product.detail}</p>
                <div className="c-product-detail__card-price">{`${product.price}.000 VND`}</div>
                <div className="c-product-detail__btn-group">
                  <button type="button" className="c-product-detail__button-add-to-cart" onClick={addToCart}>
                    <FontAwesomeIcon icon={faPlusCircle} size="lg" style={{ marginRight: 10 }} /> <FormattedMessage id="add_to_cart" defaultMessage="Add to cart" />
                  </button>
                  <button type="button" className="c-product-detail__button-download-desc">
                    <a href="https://file-examples.com/wp-content/uploads/2017/02/file_example_XLSX_100.xlsx" target="_self">
                      <FontAwesomeIcon icon={faDownload} size="lg" style={{ marginRight: 7 }} /> <FormattedMessage id="down_desc_file" defaultMessage="Down description file" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
