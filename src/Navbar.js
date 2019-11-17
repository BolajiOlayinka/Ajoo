import React, { useState } from "react";
import "./Navbar.css";
import logo from "./images/logo_1.png";
import search from "./images/search.png";
import line from "./images/Line.png";
import "./Components/Button.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="./">
          <img src={logo} alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavLink href="./How">How it Works</NavLink>

          <NavLink href="/Volunteer">Volunteers</NavLink>

          <NavLink href="./Verified Organizations">Verified Pages</NavLink>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/Search">
                <img src={search} alt="search" className="search" />
                Search
              </NavLink>
            </NavItem>

            <img src={line} alt="search" className="line" />

            <NavItem>
              <NavLink href="/login">Sign In</NavLink>
            </NavItem>
            <button className="blueButton">Start campaign</button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
