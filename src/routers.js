import { lazy } from 'react';
import DefaultLayout from './layout/DefaultLayout';

const routerPrefix = '/user/shop';
const routes = [
  {
    path: '/add',
    exact: true,
    component: lazy(() => import('./pages/AddShop')),
    title: '增加门店',
  },
  {
    path: '/sub',
    exact: true,
    component: lazy(() => import('./pages/SubShop')),
    title: '删除门店',
  },
  {
    path: '/detail',
    exact: true,
    component: lazy(() => import('./pages/ShopDetail')),
    title: '门店详情',
  },
  {
    path: '/*',
    exact: true,
    redirect: '/detail',
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
