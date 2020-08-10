import React, {Component} from 'react';

import ErrorIndicator from './helpers/ErrorIndicator';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  // during the render” no effects
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  // commit with effects
  // componentDidCatch(error, info) {

  //   logComponentStackToMyService(info.componentStack);
  // }
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
