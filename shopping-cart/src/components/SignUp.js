import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup } from "react-bootstrap";

const SignUp = props => {
    return (
        <Form>
            <FormGroup controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control autoFocus type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </FormGroup>
            <FormGroup controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control autoFocus type="password" placeholder="Enter password" />
            </FormGroup>
            <Button block type="submit">
                Sign Up
            </Button>
        </Form>
    );
};

export default connect(
    null,
    null
)(SignUp);
