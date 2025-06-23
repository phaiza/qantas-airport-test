// src/components/ErrorBoundary.tsx
import { Component, ReactNode } from 'react';
import styles from './ErrorBoundary.module.scss';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Caught error in ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorMessage}>
          <h1>⚠️ Network error</h1>
          <p>
            We couldn’t load airport data. Please check your connection and try
            again.
          </p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      );
    }

    return this.props.children;
  }
}
