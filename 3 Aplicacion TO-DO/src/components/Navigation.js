import React, { Component } from 'react';
import { NavItem, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends Component {
    render() {
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Redux-Router</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to='/counter'>
                            <NavItem eventKey={1}>
                                Counter
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to='/todos'>
                            <NavItem eventKey={2}>
                                Todos
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation