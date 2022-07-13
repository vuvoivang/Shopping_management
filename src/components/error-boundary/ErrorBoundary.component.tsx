import React, { Component, ErrorInfo } from 'react';

interface ErrorBoundaryState {
  error: Error;
  errorInfo: ErrorInfo;
}

class ErrorBoundary extends Component<{}, ErrorBoundaryState> { // Bọc app và custom để hiện component lỗi
  state = { error: null, errorInfo: null };
  errorRef: React.RefObject<HTMLPreElement>;
  constructor(props) {
    super(props);
    this.errorRef = React.createRef();
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="c-error-boundary">
          <h1 className="c-error-boundary__title">Something went wrong!</h1>
          <div className="c-error-boundary__message">
            <div>{this.state.error && this.state.error.toString()}</div>
            <pre ref={this.errorRef} className="c-error-boundary__message-content">
              {/* in which file...  */}
              {this.state.errorInfo.componentStack}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
