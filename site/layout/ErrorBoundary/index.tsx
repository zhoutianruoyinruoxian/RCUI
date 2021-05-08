import * as React from 'react';
import './style.scss';

interface ErrorBoundaryProps {
  message?: React.ReactNode;
  description?: React.ReactNode;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  {
    error?: Error | null;
    info: {
      componentStack?: string;
    };
  }
> {
  state = {
    error: undefined,
    info: {
      componentStack: '',
    },
  };

  componentDidCatch(error: Error | null, info: object) {
    this.setState({ error, info });
  }

  render() {
    const { children } = this.props;
    const { error, info } = this.state;

    if (error) {
      return (<div className="main-error-boundary">
        <div className="main-error-boundary-message">{error?.toString()}</div>
        <div className="main-error-boundary-description"><pre>{info.componentStack}</pre></div>
      </div>);
    }
    return children;
  }
}
