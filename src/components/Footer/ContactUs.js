import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class ContactUs extends Component {
  render() {
    return (
      <>
        <Form>
          <style>
            {`
                .btn-primary:hover {
                    border-color: #F2789F;
                }
                `}
          </style>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Floating className="mb-3">
              <Form.Control
                style={{ backgroundColor: "#FEE3EC" }}
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputCustom">
                <span style={{ color: "#F2789F" }}>Email address</span>
              </label>
            </Form.Floating>
          </Form.Group>
          <Button
            type="submit"
            style={{
              backgroundColor: "#F2789F",
              color: "#FEE3EC",
              borderColor: "#white",
            }}
            onClick={() => console.log("Info")}
          >
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
