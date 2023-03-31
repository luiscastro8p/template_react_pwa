import React from 'react';
import { Route, Navigate, Routes, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './login';
import Sidebar from '../layout/index';

export const PetitionContext = React.createContext();

const PagesView = () => {
  const [error, setError] = React.useState([]);
  return (
    <PetitionContext.Provider value={(error, setError)}>
      <BrowserRouter value="">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Sidebar view={false} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </PetitionContext.Provider>
  );
};

export default PagesView;
