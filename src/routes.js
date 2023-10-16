import React from 'react';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';

const HomeView = React.lazy(() => import('./views/home'));
const AdminView = React.lazy(() => import('./views/admin'));

export const routes = () => {
  const router = [
    {
      path: '/home',
      title: 'Inicio',
      element: <HomeView />,
      icon: <AiFillHome />
    },
    {
      path: '/admin',
      title: 'Administrador',
      element: <AdminView />,
      icon: <AiOutlineUser />
    }
  ];
  return router;
};

export default routes();
