import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Product from "./components/Product";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
// import "./sass/App.scss";
// import "./App.css";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/product" component={Product} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/notfound" component={NotFound} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
