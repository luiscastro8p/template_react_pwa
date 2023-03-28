import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../layout.scss";
import { useNavigate } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
const Sidebar = ({ view = false, handleView, routes }) => {
  const navigate = useNavigate();
  console.log("")
  return (
    <>
      <Offcanvas show={view} onHide={() => handleView()}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <Nav defaultActiveKey="/home" className="flex-column">
            {routes.map((route, idx) => {
              return (
                <Nav.Link
                  href={route.path}
                  className="item-link"
                  key={`link-${idx}`}
                  onClick={() => navigate(`${route.path}`)}
                >
                  {route.title}
                  {route.icon}
                </Nav.Link>
              );
            })}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
