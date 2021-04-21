import { useRouteMatch } from 'react-router-dom';

export default function Main(): JSX.Element {
    const route = useRouteMatch();

    return (
        <h2>
            This is {route.url}
        </h2>
    );
}