import React from 'react';
import { AiFillHome } from 'react-icons/ai';

const HomeView = React.lazy(() => import('./views/home'));

export const routes = () => {
  const router = [
    {
      path: '/home',
      title: 'Inicio',
      element: <HomeView />,
      icon: <AiFillHome />
    }
  ];
  return router;
};

export default routes();
