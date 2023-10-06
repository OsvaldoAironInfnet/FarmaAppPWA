import { lazy } from 'react';

const SplashScreen = lazy(() => import('./pages/features/splasher/Splash.jsx'));
const LoginScreen = lazy(() => import('./pages/features/login/Loginx.jsx'));
const HomeScreen = lazy(() => import('./pages/features/home/Homex.jsx'))

const routes = [ 
    { path: '/', element: SplashScreen, title: 'SplashScreen', tab: false, getLastRoute: false },
    { path: '/login', element: LoginScreen, title: 'LoginScreen', tab: false, getLastRoute: false },
    { path: '/home', element: HomeScreen, title: 'HomeScreen', tab: true, getLastRoute: false}

];

export default routes;