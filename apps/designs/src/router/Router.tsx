import App from '@/components/App';
import { LazyDesigns } from '@/pages/designs/Designs.lazy';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/designs',
        element: (
          <Suspense fallback={<div>Loading designs...</div>}>
            <LazyDesigns />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
