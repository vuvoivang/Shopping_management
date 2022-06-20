import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { IntlProvider, intlShape } from 'react-intl';
import defaultLanguage from '../../../src/localization/en.json';

const intlProvider = new IntlProvider({ locale: 'en', messages: defaultLanguage }, {});
const { intl } = intlProvider.getChildContext();

const nodeWithIntlProp = node => React.cloneElement(node, { intl });

const mountWithIntl = (node, { context, childContextTypes, ...additionalOptions } = {}) =>
  mount(nodeWithIntlProp(node), {
    context: Object.assign({}, { intl }, context),
    childContextTypes: Object.assign({}, { intl: intlShape }, childContextTypes),
    ...additionalOptions
  });

const defaultLanguageState = {
  locale: 'en',
  formattedMessages: {
    en: defaultLanguage
  }
};

//TODO: figure out why this is breaking
const createComponentWithIntl = (children, props = { locale: 'en', messages: defaultLanguage }) => {
  return renderer.create(<IntlProvider {...props}>{children}</IntlProvider>);
};

export { mountWithIntl, defaultLanguage, defaultLanguageState, createComponentWithIntl };
