import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Signup = lazy(() => import('./Signup'));
const Login = lazy(() => import('./Login'));
const ForgotPassword = lazy(() => import('./ForgotPassword'));

export default function App(): JSX.Element {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Login />
                    </Suspense>
                </Route>
                <Route path="/signup">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Signup />
                    </Suspense>
                </Route>
                <Route path="/forgot-password">
                    <Suspense fallback={<div>Loading...</div>}>
                        <ForgotPassword />
                    </Suspense>
                </Route>
            </Switch>
        </Router>
    );
}