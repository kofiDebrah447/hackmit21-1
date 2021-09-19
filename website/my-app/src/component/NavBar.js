import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
const NavBar = () => {
    return (
        <div class = "App">
          <>
      <ReactBootStrap.Navbar bg="light" variant="light">
        <ReactBootStrap.Container>
            <Link to="/">
        <ReactBootStrap.Navbar.Brand fixed="end" href="#home">Home</ReactBootStrap.Navbar.Brand>
        </Link>
        <ReactBootStrap.Nav className="ml-auto">
        <Link to="/Books">
          <ReactBootStrap.Nav.Link href="#Book">Shop</ReactBootStrap.Nav.Link>
          </Link>
          <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </>
        </div>
      );
}

export default NavBar;