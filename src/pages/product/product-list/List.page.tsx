import { Product } from 'models/product.model';
import { Fragment, useState } from 'react';
import { fetchProductList } from 'services/product.service';
import { FormattedMessage } from 'react-intl';
import ProductItem from '../../../components/product/ProductItem.component';

const ProductList: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>();
  fetchProductList.then(data => {
    setProductList(data as Product[]);
  });
  return (
    <div className="c-product-list">
      <h1 className="c-product-list__header">
        <FormattedMessage id="product_list" defaultMessage="Product List" />
      </h1>
      <div className="c-product-list__row">
        {productList &&
          productList.map(item => (
            <Fragment key={item.id}>
              <ProductItem product={item} />
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
