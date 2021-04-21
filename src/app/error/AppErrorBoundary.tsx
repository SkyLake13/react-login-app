import { Component, ErrorInfo, ReactNode } from "react";

interface AppErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

export class AppErrorBoundary extends Component<any, AppErrorBoundaryState> {
    constructor(props: any) {
        super(props);

        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): AppErrorBoundaryState {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error: error };
    }

    public componentDidCatch?(error: Error, errorInfo: ErrorInfo): void {
        // You can also log the error to an error reporting service
        console.error(error);
        console.error(errorInfo);
    }

    public render(): JSX.Element | ReactNode {
        if (this.state.hasError) {
            return <div>
                Something went wrong ! check console error.
                </div>
        }

        return this.props.children;
    }
}