import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => (
  <div className="c-loading">
    <CircularProgress size={80} />
  </div>
);

export default Loading;
