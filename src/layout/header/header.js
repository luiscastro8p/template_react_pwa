import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSignOut } from "react-icons/go";
import "../layout.scss";
const Header = ({ toggleMenu }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="header">
        <Navbar.Brand>
          <em className="toggle-icon">
            <GiHamburgerMenu onClick={() => toggleMenu()} />
          </em>
          <img
            alt="user"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top "
          />
          React Bootstrap
        </Navbar.Brand>
        <Navbar.Brand>
          <GoSignOut />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
