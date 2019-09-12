import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, Badge, Form, FormControl, Button, Container, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

const NavBar = props => {
    return (
        <Navbar bg="light" expand="lg" sticky="top" collapseOnSelect>
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand>
                    <NavLink to="/">
                        <FontAwesomeIcon icon={faReact} />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <LinkContainer to="/">
                            <NavItem>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/product">
                            <NavItem>Product</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <NavItem>Contact</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>

                <NavLink to="/checkout">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {props.shoppingCartLength !== 0 ? (
                        <Badge
                            style={{
                                background: "red",
                                position: "relative",
                                top: "-12px"
                            }}
                        >
                            {props.shoppingCartLength}
                        </Badge>
                    ) : null}
                </NavLink>
                <NavbarCollapse>
                    <Nav>
                        <LinkContainer to="/signin">
                            <NavItem>Sign In</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/signup">
                            <NavItem>Sign Up</NavItem>
                        </LinkContainer>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
};

const mapStateToProps = appState => {
    const shoppingCartLength = appState.shoppingCarts.reduce((sum, item) => {
        sum += item.quantity;
        return sum;
    }, 0);
    return { activePage: appState.activePage, shoppingCartLength };
};

export default connect(
    mapStateToProps,
    null
)(NavBar);
