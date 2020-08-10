import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import MPW from '../MPW.png';


const Navs = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand>MPW</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>     
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Navs
