import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import Signup from './Signup';

export default function App(): JSX.Element {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/forgot-password">
                    <ForgotPassword />
                </Route>
            </Switch>
        </Router>
    );
}