import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
    Navbar,
    Nav,
    NavItem,
    Badge,
    Container,
    Form,
    FormControl,
    Button,
    Image
} from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
// import { faReact } from "@fortawesome/free-brands-svg-icons";
import "./NavBar.css";
const NavBar = props => {
    return (
        <Navbar bg='light' expand='lg' className='w-100 mb-0 py-2 px-0' id='navbar' sticky='top'>
            <Container>
                <Navbar.Brand className=''>
                    <NavLink className='nav-link' to='/'>
                        <Image
                            src='./logo192.png'
                            width='40'
                            height='40'
                            className='d-inline-block align-top'
                            alt='Logo'
                        />
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls='basic-navbar-nav'
                    data-target='#basic-navbar-nav'
                    arial-expanded='false'
                    data-toggle='collapse'
                />

                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <NavItem>
                            <NavLink to='/'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/product'>Product</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/contact'>Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>

                <Form inline>
                    <FormControl type='text' placeholder='Search' className='mr-sm-2' />
                    <Button variant='outline-success' type='submit'>
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </Form>

                <Nav className='ml-auto'>
                    <NavItem>
                        <NavLink to='/checkout'>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            {props.shoppingCartLength !== 0 ? (
                                <Badge
                                    style={{
                                        background: "light",
                                        position: "relative",
                                        top: "-12px"
                                    }}>
                                    {props.shoppingCartLength}
                                </Badge>
                            ) : null}
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to='/signin'>Sign In</NavLink>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    );
};

const mapStateToProps = appState => {
    const shoppingCartLength = appState.shoppingCarts.reduce((sum, item) => {
        sum += item.quantity;
        return sum;
    }, 0);
    return {
        activePage: appState.activePage,
        shoppingCartLength
    };
};

export default connect(
    mapStateToProps,
    null
)(NavBar);
