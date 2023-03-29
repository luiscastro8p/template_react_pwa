import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import './layout.scss';
import Arrayroutes from '../routes';

const Layout = () => {
  const [view, setView] = React.useState(false);
  const toggleMenu = () => setView(!view);

  return (
    <div>
      <Header toggleMenu={toggleMenu} />

      <Sidebar view={view} handleView={toggleMenu} routes={Arrayroutes} />

      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          {Arrayroutes.map((route) => (
            <Route path={route.path} key={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default Layout;
