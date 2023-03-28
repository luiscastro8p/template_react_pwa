import React from "react";
import { Route, Navigate, Routes, BrowserRouter } from "react-router-dom";
import Login from "./login";
import Sidebar from "../layout/index";
export const AuthContext = React.createContext({});
const PagesView = () => {
  return (
    <AuthContext.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Sidebar />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default PagesView;
