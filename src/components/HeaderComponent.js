import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem, NavLink } from 'reactstrap'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return(
            <React.Fragment>
                <Navbar color='light' light sticky='top' expand='md'>
                    <NavbarBrand href='/'>DogDayz</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <NavLink href='/about'>
                                    {/* <i className='bi bi-file-text' /> */}
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/services'>
                                    Services
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact">
                                    {/* <i className='bi bi-chat' /> */}
                                    Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header