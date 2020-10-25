import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>ShopCom</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='/cart'>
                                <Nav.Link ><i className="fas fa-shopping-cart"></i> Cart </Nav.Link>
                            </LinkContainer >
                            <LinkContainer to="/login">
                                <Nav.Link ><i className="fas fa-user"></i> Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
