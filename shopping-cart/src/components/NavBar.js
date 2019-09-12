import React from "react";
// import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Nav, Badge, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const NavBar = props => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="/">
                <FontAwesomeIcon icon={faReact} />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/product">Product</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </Form>
            </Navbar.Collapse>
            <Nav.Link to="/checkout">
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
            </Nav.Link>
            <Nav.Link href="/signin">Sign In</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
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
