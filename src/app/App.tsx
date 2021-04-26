import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignupDone from './SignupDone';

const Signup = lazy(() => import('./Signup'));
const Login = lazy(() => import('./Login'));
const ForgotPassword = lazy(() => import('./ForgotPassword'));

export default function App(): JSX.Element {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Suspense fallback={<Loading />}>
                        <Login />
                    </Suspense>
                </Route>
                <Route path='/signup'>
                    <Suspense fallback={<Loading />}>
                        <Signup />
                    </Suspense>
                </Route>
                <Route path='/signup-done'>
                    <Suspense fallback={<Loading />}>
                        <SignupDone />
                    </Suspense>
                </Route>
                <Route path="/forgot-password">
                    <Suspense fallback={<Loading />}>
                        <ForgotPassword />
                    </Suspense>
                </Route>
            </Switch>
        </Router>
    );
}

function Loading(): JSX.Element {
    return (<div>Loading...</div>);
}
