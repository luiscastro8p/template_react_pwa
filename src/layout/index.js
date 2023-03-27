import React from "react";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import './layout.scss'

const Layout = () => {
  const [view, setView] = React.useState(false);
  const toggleMenu = () => setView(!view);
  return (
    <div>
      <Header toggleMenu={toggleMenu} />
      <Sidebar view={view} handleView={toggleMenu} />
    </div>
  );
};

export default Layout;
