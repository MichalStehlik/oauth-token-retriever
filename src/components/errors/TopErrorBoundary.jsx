import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            errorInfo: "", 
            hasError: false,
        };
    }
  
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
  
    componentDidCatch(error, errorInfo) {
        console.error({error, errorInfo});
        this.setState({ errorInfo });
    }
  
    render() {
        if (this.state.hasError) {
            return (
                <p>Došlo k chybě.</p>
            );
        }
        return this.props.children;
    }
}