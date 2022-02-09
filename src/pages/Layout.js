import React, { Component } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/FooterComponent";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
        <>
      <Navbar color="light" light sticky="top" expand="md">
        <NavbarBrand href="/">DogDayz</NavbarBrand>
        <NavbarToggler onClick={this.toggleNav} />
        <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link className="nav-link" to='/services'>Services</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to='/contactus'>Contact</Link>
                </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
      <Outlet />
      <Footer />
      </>
    );
  }
}

export default Layout;
