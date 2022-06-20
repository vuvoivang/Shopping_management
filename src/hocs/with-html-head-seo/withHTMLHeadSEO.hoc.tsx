import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { isEqual } from 'lodash';

Helmet.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
  return !isEqual(this.props, nextProps);
};

export interface SEOData {
  title?: string;
}

const withHTMLHeadSEO = (data: SEOData = {}) => BaseComponent => {
  class SEOComponent extends PureComponent {
    render() {
      const title = (data && data.title) || 'React + Typescript + SCSS';
      return (
        <>
          <Helmet title={title} />
          {BaseComponent && <BaseComponent {...this.props} />}
        </>
      );
    }
  }

  return SEOComponent;
};

export default withHTMLHeadSEO;
