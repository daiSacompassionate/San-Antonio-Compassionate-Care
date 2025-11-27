import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, info: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, info) {
        this.setState({ info });
        console.error(error, info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: 30 }}>
                    <h1>Something went wrong</h1>
                    <pre>{String(this.state.error)}</pre>
                    <details>{this.state.info?.componentStack}</details>
                </div>
            );
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
