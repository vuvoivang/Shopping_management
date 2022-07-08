import React from 'react';
import { getMockStore, mountWithProvider } from '../../../config/jest/mocks/ReduxStoreMock';
import About from 'pages/about/About.page';

describe('<About />', () => {
  const setUp = ()=>{
    const wrapper = mountWithProvider(<About />)();
    return { wrapper };
  }

  it('render as expect', () => {
    const { wrapper } = setUp();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.c-about').exists()).toBeTruthy();
    expect(wrapper.find('.c-about__image.u-border-radius--round').exists()).toBeTruthy();
    expect(wrapper.find('.c-about-me__link--blue').text()).toMatch('KMS Technology');
  });
});
