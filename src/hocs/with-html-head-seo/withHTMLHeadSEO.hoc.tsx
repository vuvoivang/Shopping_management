import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { isEqual } from 'lodash';

// manage all of your changes to the document head = compare
Helmet.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
  return !isEqual(this.props, nextProps);
};

export interface SEOData {
  title?: string;
}
// mount title with component
const withHTMLHeadSEO = (data: SEOData = {}) => BaseComponent => {
  class SEOComponent extends PureComponent {
    render() {
      const title = (data && data.title) || 'Store';
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
