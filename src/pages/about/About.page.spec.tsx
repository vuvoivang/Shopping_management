import React from 'react';
import { getMockStore, mountWithProviderAndIntl } from '../../../config/jest/mocks/ReduxStoreMock';
import About from 'pages/about/About.page';

describe('<About />', () => {
  const storeWithVietnameseLanguage = {
    languageState: { locale: 'vi' }
  };
  const storeWithEnglishLanguage = {
    languageState: { locale: 'en' }
  };
  const setUp = (store)=>{
    const wrapper = mountWithProviderAndIntl(<About />)(getMockStore(store));
    return { wrapper };
  }

  it('render as expect', () => {
    const { wrapper } = setUp(storeWithEnglishLanguage);
    expect(wrapper.find('.c-about').exists()).toBeTruthy();
    expect(wrapper.find('.c-about__image.u-border-radius--round').exists()).toBeTruthy();
    expect(wrapper.find('.c-about-me__link--blue').text()).toMatch('KMS Technology');
  });
  it('multi-language as expect: vietnamese', () => {
    const { wrapper } = setUp(storeWithVietnameseLanguage);
    expect(wrapper.find('.c-about__text').find('span').at(0).text()).toMatch('Tên của tôi');
  });
  it('multi-language as expect: english', () => {
    const { wrapper } = setUp(storeWithEnglishLanguage);
    expect(wrapper.find('.c-about__text').find('span').at(0).text()).toMatch('My name');
  });
});
