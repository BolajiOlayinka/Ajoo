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
          <b className= "nav-link"><Link to="./How">How it Works</Link></b>

          <b className= "nav-link"><Link to ="/Volunteer">Volunteers</Link></b>

          <b className= "nav-link"><Link to="./Verified">Verified Pages</Link></b>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <b className= "nav-link">
                <img src={search} alt="search" className="search" /><Link to ="/Search">
                Search
                </Link>
              </b>
            </NavItem>

            <img src={line} alt="search" className="line" />

            <NavItem>
            <b className= "nav-link"> <Link to="/login">Sign In</Link></b>
            </NavItem>
            <button className="blueButton">Start campaign</button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
