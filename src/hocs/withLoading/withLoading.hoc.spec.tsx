import React from 'react';
import { getMockStore, mountWithProviderAndRouter } from '../../../config/jest/mocks/ReduxStoreMock';
import { withLoading } from './withLoading.hoc';
import About from 'pages/about/About.page';

describe('withLoading', () => {
  const storeWithLoading = {
    globalState: { loadingActions: 1 }
  };
  const storeWithNotLoading = {
    globalState: { loadingActions: 0 }
  };
  const mockStoreLoading = getMockStore(storeWithLoading);
  const mockStoreNotLoading = getMockStore(storeWithNotLoading);

  const setUp = store => {
    const HocWithLoadingComponent = withLoading(About);
    const wrapper = mountWithProviderAndRouter(<HocWithLoadingComponent />)(store);
    return { wrapper };
  };

  it('loading as expect', () => {
    const { wrapper } = setUp(mockStoreLoading);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Loading').exists()).toBeTruthy();
  });
  it('not loading as expect', () => {
    const { wrapper } = setUp(mockStoreNotLoading);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Loading').exists()).toBeFalsy();
  });
});
