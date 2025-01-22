import type { RouteObject } from 'react-router-dom';
import { HomePage } from '@p/HomePage';
import { LoanPage } from '@p/LoanPage';
import { NoMatch } from '@c/NoMatch';
import { Layout } from '@c/Layout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/loanpage', element: <LoanPage />, },
      { path: '*', element: <NoMatch /> },
    ],
  },
];