import ReactDOM from 'react-dom';

export function Portal(props: { children: any, container: Element }): JSX.Element {
    return ReactDOM.createPortal(props.children, props.container);
}