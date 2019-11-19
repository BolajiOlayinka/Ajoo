import React, { useState } from "react";
import "./Navbar.css";
import logo from "./images/logo_1.png";
import search from "./images/search.png";
import line from "./images/Line.png";
import "./Components/Button.css";
import {Link} from 'react-router-dom';
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
          <NavLink > <Link to="./How">How it Works</Link></NavLink>

          <NavLink><Link to ="/Volunteer">Volunteers</Link></NavLink>

          <NavLink ><Link to="./Verified Organizations">Verified Pages</Link></NavLink>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <img src={search} alt="search" className="search" /><Link to ="/Search">
                Search
                </Link>
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
