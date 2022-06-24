import React from 'react';
import Header from '../../components/header/Header.component';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withHeader = Component => (props: any) => (
  <div>
    <Header />
    <Component {...props} />
  </div>
);
