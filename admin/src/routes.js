import React from 'react';

const Articles = React.lazy(() => import('./views/Articles/Forms'));
const Users = React.lazy(() => import('./views/User/Tables'));
const Transactions = React.lazy(() => import('./views/Transactions/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Vouchers = React.lazy(() => import('./views/Vouchers/Forms'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/articles', name: 'Articles', component: Articles },
  { path: '/users', name: 'Users', component: Users },
  { path: '/transactions', name: 'Transactions', component: Transactions },
  { path: '/vouchers', name: 'Vouchers', component: Vouchers }
];

export default routes;
