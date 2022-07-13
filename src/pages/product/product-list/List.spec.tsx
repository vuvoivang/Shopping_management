import React from 'react';
import ProductList from './List.page';
import { productList } from 'assets/dummy-data/product.data';
import { mountWithProviderAndRouter } from '../../../../config/jest/mocks/ReduxStoreMock';

describe('<ProductList />', () => {
  const originalError = console.error;
  beforeAll(() => {
    console.error = (...args) => {
      if (/Warning.*not wrapped in act/.test(args[0])) {
        return;
      }
      originalError.call(console, ...args);
    };
  });

  afterAll(() => {
    console.error = originalError;
  });
  const runAllPromises = () => new Promise(setImmediate);
  const setUp = () => {
    const wrapper = mountWithProviderAndRouter(<ProductList />)();
    return { wrapper };
  };
  it('render as expect', async () => {
    const { wrapper } = setUp();
    // lưu snapshot và kiểm tra sự thay đổi
    expect(wrapper.find('.c-product-list__header').exists()).toBeTruthy();
    expect(wrapper.find('.c-product-list__row')).toHaveLength(1);
    // test after call api
    await runAllPromises();
    wrapper.update();
    expect(wrapper.find('.c-product-item')).toHaveLength(productList.length);
  });
});
