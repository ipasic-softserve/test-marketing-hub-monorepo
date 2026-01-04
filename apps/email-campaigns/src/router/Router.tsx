import App from '@/components/App';
import { LazyEmails } from '@/pages/emails/Emails.lazy';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/emails',
        element: (
          <Suspense fallback={<div>Loading emails...</div>}>
            <LazyEmails />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
