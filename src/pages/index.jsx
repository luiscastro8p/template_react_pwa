import React from 'react';
import { Route, Navigate, Routes, BrowserRouter } from 'react-router-dom';
import Login from './login';
import Sidebar from '../layout/index';

export const AuthContext = React.createContext({});

const PagesView = () => (
  <AuthContext.Provider>
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Sidebar view={false} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      </Routes>
    </BrowserRouter>
  </AuthContext.Provider>
);

export default PagesView;
