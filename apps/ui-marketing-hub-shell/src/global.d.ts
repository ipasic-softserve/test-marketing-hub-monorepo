declare module '*.svg' {
  import React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
declare module '*png';
declare module '*jpg';
declare module '*jpeg';
declare module '*gif';

declare module 'designs/Router' {
  import { RouteObject } from 'react-router-dom';
  const routes: RouteObject[];
  export default routes;
}

declare module 'email_campaigns/Router' {
  import { RouteObject } from 'react-router-dom';
  const routes: RouteObject[];
  export default routes;
}
