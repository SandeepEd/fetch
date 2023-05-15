import { Component } from "react";

export class ErrorBoundary extends Component<{ children: JSX.Element }, {
    hasError: boolean, error: Error | null
}>{
    constructor(props: { children: JSX.Element }) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong</h1>
                    <p>{this.state.error?.message}</p>
                </div>
            )
        }
        return this.props.children
    }
}