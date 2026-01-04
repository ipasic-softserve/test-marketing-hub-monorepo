import { createBrowserRouter } from 'react-router-dom';

import App from '@/components/App';

import designsRoutes from 'designs/Router';
import emailCampaignsRoutes from 'email_campaigns/Router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [...emailCampaignsRoutes, ...designsRoutes],
  },
]);
