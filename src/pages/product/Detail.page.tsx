import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faDownload } from '@fortawesome/free-solid-svg-icons';
import { fetchProductDetail } from '../../assets/dummy-data/product.data';

interface ParamTypes {
  productId: string;
}

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product>();
  const { productId } = useParams<ParamTypes>();
  const fetchData = async id => {
    let productDetail = await fetchProductDetail(id);
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
        <div
          style={{
            borderRadius: '20px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '100px 200px'
          }}
        >
          <div className="l_wrapper d-flex justify-content-around align-items-center">
            <div className="c-product-detail__image">
              <img alt="smart watch" src={product.image} height="300" style={{ objectFit: 'contain' }} />
            </div>
            <div className="c-product-detail__info" style={{ maxWidth: 600 }}>
              <h1 style={{ color: 'blue' }}>{product.name}</h1>
              <p>{product.detail}</p>
              <div className="c-product-detail__card-price">{`${product.price}.000 VND`}</div>
              <div className="btn-group">
                <Link to="/products">
                  <button type="button" className="c-product-detail__button-add-to-cart" style={{ padding: '15px 30px' }}>
                    <FontAwesomeIcon icon={faPlusCircle} size="lg" style={{ marginRight: 7 }} /> Add to cart
                  </button>
                </Link>
                <button type="button" className="c-product-detail__button-download-desc" style={{ padding: '15px 30px' }}>
                  <a href={Number(product.id) % 2 === 0 ? '/files/EvenProduct.xlsx' : '/files/OddProduct.xlsx'} target="_self">
                    <FontAwesomeIcon icon={faDownload} size="lg" style={{ marginRight: 7 }} /> Down description file
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
