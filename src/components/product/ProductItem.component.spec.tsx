import React from 'react';
import { Product } from 'models/product.model';
import { mountWithProviderAndRouter } from '../../../config/jest/mocks/ReduxStoreMock';
import ProductItem from './ProductItem.component';


describe('<ProductItem />', () => {
  const sampleProduct: Product = {
    id: 1,
    name: 'Hero Watch',
    detail: 'Apple Watch is the ultimate device for a healthy life. Available in three models: Apple Watch',
    price: 90,
    hero: 'OMG This just came out today!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAzV2p08eELUS-trvsvKOG1YLMTtwVTD4z3Z4BozUTilSEhIJ1MLaY7ADGurmT0E6yZfk&usqp=CAU'
  };

  const setUp = () => {
    const wrapper = mountWithProviderAndRouter(<ProductItem product={sampleProduct} />)();
    return { wrapper };
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('render as expect', () => {
    const { wrapper } = setUp();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.c-product-item__card-image').exists()).toBeTruthy();
    expect(wrapper.find('.c-product-item__card-content').exists()).toBeTruthy();
    expect(
      wrapper
        .find('.c-product-item__card-info')
        .find('h4')
        .text()
    ).toEqual(sampleProduct.name);
    expect(
      wrapper
        .find('.c-product-item__card-info')
        .find('p')
        .text()
    ).toEqual(sampleProduct.detail);
    expect(wrapper.find('.c-product-item__card-price').text()).toEqual(`${sampleProduct.price}.000 VND`);
  });

  it('NavLink path to detail', () => {
    const { wrapper } = setUp();
    const NavLink = wrapper.find('NavLink');
    expect(NavLink).toHaveLength(1);
    expect(NavLink.prop('to')).toEqual(`/products/${sampleProduct.id}`);
  });
});
