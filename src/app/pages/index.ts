import { lazy } from 'react';

const Main = lazy(() => import('./Main'));
const Dynamic = lazy(() => import('./Dynamic'));

export { Main, Dynamic };