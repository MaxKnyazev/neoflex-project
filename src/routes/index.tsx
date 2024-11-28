import type { RouteObject } from 'react-router-dom';
import { HomePage } from '@p/HomePage';
import { TwoPage } from '@p/TwoPage';
import { NoMatch } from '@c/NoMatch';
import { Layout } from '@c/Layout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/twopage', element: <TwoPage />, },
      { path: '*', element: <NoMatch /> },
    ],
  },
];