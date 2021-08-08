import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Nav,
  Navbar as BSNavbar,
  NavDropdown as BSNavDropdown,
  Image,
} from 'react-bootstrap';
import NavDropdown from './NavDropdown';
import Hamburger from './Hamburger';
import styles from './NavBar.module.scss';

export default function Navbar() {
  return (
    <BSNavbar className="p-4" bg="dark-blue" expand="lg">
      <Container>
        <BSNavbar.Brand as={Link} to="/">
          <Image src="/logo.png" className={styles.logo} />
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbar-nav" className="border-white">
          <Hamburger />
        </BSNavbar.Toggle>
        <BSNavbar.Collapse id="navbar-nav">
          <Nav className="justify-content-center w-100">
            <NavDropdown className="mr-5" title="Company" id="company">
              <BSNavDropdown.Item as={Link} to="/">
                Home
              </BSNavDropdown.Item>
              <BSNavDropdown.Item as={Link} to="/about">
                About
              </BSNavDropdown.Item>
            </NavDropdown>

            <NavDropdown className="mr-5" title="Technology" id="technology">
              <BSNavDropdown.Item as={Link} to="/understanding-cng">
                CNG Technology
              </BSNavDropdown.Item>
              <BSNavDropdown.Item as={Link} to="/technology-solutions">
                Solutions
              </BSNavDropdown.Item>
              <BSNavDropdown.Item as={Link} to="/technology-benefits">
                Benefits
              </BSNavDropdown.Item>
            </NavDropdown>

            <NavDropdown className="mr-5" title="News" id="news">
              <BSNavDropdown.Item>News</BSNavDropdown.Item>
              <BSNavDropdown.Item>Partners</BSNavDropdown.Item>
            </NavDropdown>

            <NavDropdown className="mr-5" title="Contact" id="contact">
              <BSNavDropdown.Item>Contact us</BSNavDropdown.Item>
              <BSNavDropdown.Item>Privacy policy</BSNavDropdown.Item>
              <BSNavDropdown.Item>Terms and conditions</BSNavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
