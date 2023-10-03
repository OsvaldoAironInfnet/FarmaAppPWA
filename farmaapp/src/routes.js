import { lazy } from 'react';

const SplashScreen = lazy(() => import('./pages/features/splasher/Splash.jsx'));
const LoginScreen = lazy(() => import('./pages/features/login/Loginx.jsx'));

const routes = [ 
    { path: '/', element: SplashScreen, title: 'SplashScreen', tab: false, getLastRoute: false },
    { path: '/login', element: LoginScreen, title: 'SplashScreen', tab: false, getLastRoute: false },

];

export default routes;