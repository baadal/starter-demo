import { loadable } from 'starter/utils/loadable';
import { RouteData } from 'starter/core/model/route.model';
import NotFound from 'pages/not-found/not-found.page';

export const routesList: RouteData[] = [
  {
    path: '/about',
    component: loadable(() => import(/* webpackChunkName: "about" */ 'pages/about/about.page')),
  },
  {
    path: '/demo/css-styles',
    component: loadable(() => import(/* webpackChunkName: "demo" */ 'pages/demo/css-styles/css-styles.page')),
  },
  {
    path: '/demo/css-in-js',
    component: loadable(() => import(/* webpackChunkName: "demo" */ 'pages/demo/css-in-js/css-in-js.page')),
  },
  {
    path: '/demo/state-store',
    component: loadable(() => import(/* webpackChunkName: "demo" */ 'pages/demo/state-store/state-store.page')),
  },
  {
    path: '/demo/fibonacci/:n',
    component: loadable(() => import(/* webpackChunkName: "demo" */ 'pages/demo/fibonacci[n]/fibonacci.page')),
  },
  {
    path: '/demo/esnext',
    component: loadable(() => import(/* webpackChunkName: "demo" */ 'pages/demo/esnext/esnext.page')),
  },
  {
    path: '/demo/external-data',
    component: loadable(() => import(/* webpackChunkName: "demo" */ 'pages/demo/external-data/external-data.page')),
  },
  {
    path: '/',
    component: loadable(() => import(/* webpackChunkName: "home" */ 'pages/home/home.page')),
  },
  {
    name: 'not-found',
    path: '/*',
    component: NotFound,
  },
];
