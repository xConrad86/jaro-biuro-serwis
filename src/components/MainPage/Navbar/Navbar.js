import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const navbar = () => {
  return (
    <div>
      <Navbar fixed="top" bg="dark" expand="sm" variant="dark">
        <Navbar.Brand href="/">
          <p>jaro Biuro/Serwis</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">STRONA GŁÓWNA</Nav.Link>
            <Nav.Link href="/bestsellers">BESTSELLERY</Nav.Link>
            <Nav.Link href="/catalogue">KATALOG PRODUKTÓW</Nav.Link>
            <Nav.Link href="/contact">KONTAKT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default navbar;
