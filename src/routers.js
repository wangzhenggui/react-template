import { lazy } from 'react';
import DefaultLayout from './layout/DefaultLayout';

const routerPrefix = '';
const routes = [
  {
    path: '/index',
    exact: true,
    component: lazy(() => import('./pages/Home')),
    title: '首页',
  },
];

export default [
  {
    path: routerPrefix,
    component: DefaultLayout,
    routes,
  },
];

export const router = 'browserRouter';
