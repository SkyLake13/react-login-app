import {
    Switch,
    Route
} from 'react-router-dom';

import { DyanmicPage } from './pages/dyanmic-page/DynamicPage';

export function AppRoutes(): JSX.Element {
    return (
        <Switch>
            <Route path="/:page">
                <DyanmicPage />
            </Route>
        </Switch>
    );
}