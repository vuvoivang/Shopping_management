import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { configure, shallow, mount, render } from 'enzyme';
import { LocalStorageMock } from './mocks/LocalStorageMock';
import { SessionStorageMock } from './mocks/SessionStorageMock';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
global.React = React;
global.Component = Component;
global.PropTypes = PropTypes;
global.connect = connect;
global.shallow = shallow;
global.mount = mount;
global.render = render;
global.localStorage = new LocalStorageMock();
global.sessionStorage = new SessionStorageMock();
global.getNewRelicBrowserConfig = jest.fn().mockReturnValue('{}');
global.getAppProfile = jest.fn().mockReturnValue('test6');
global.getLogLevel = jest.fn().mockReturnValue('debug');
global.getApiGatewayUrl = jest.fn();
global.navigator = {};
global.cancelAnimationFrame = callback => {
  setTimeout(callback, 0);
};
window.scrollTo = () => {};
