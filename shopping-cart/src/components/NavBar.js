import React, { Component } from "react";

const NavBar = () => {
    return (
        <nav>
            <div>
                <h1>Logo</h1>
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Contact</li>
                </ul>
                <div>
                    <span>Cart (0)</span>
                    <span>Log In</span>
                    <span>Sign Up</span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
