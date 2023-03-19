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
    path: '/login',
    exact: true,
    component: lazy(() => import('./pages/Login')),
    title: '登录页',
  },
  {
    path: routerPrefix,
    component: DefaultLayout,
    routes,
  },
];

export const router = 'hashRouter';
