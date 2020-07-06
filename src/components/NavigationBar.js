import React from 'react';
import { Link } from 'react-router-dom';
import { NavStyles } from './Styles'
import { Navbar, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
   
    <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Food Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/breakfast">Breakfast</Nav.Link>
            <Nav.Link href="/lunch">Lunch</Nav.Link>
            <Nav.Link href="/dinner">Dinner</Nav.Link>
            <Nav.Link href="/add-item">Add Item</Nav.Link>
              <div className="nav-container">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              </div>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
    
   
  )
}

export default NavigationBar;