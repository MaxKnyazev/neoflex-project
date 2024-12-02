import type { RouteObject } from 'react-router-dom';
import { HomePage } from '@p/HomePage';
import { SecondPage } from '@p/SecondPage';
import { NoMatch } from '@c/NoMatch';
import { Layout } from '@c/Layout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/secondpage', element: <SecondPage />, },
      { path: '*', element: <NoMatch /> },
    ],
  },
];