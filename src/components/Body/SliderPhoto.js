import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class SliderPhoto extends Component {
  render() {
    return (
      <>
        <style>
          {`
           .btn-outline-light{
              color: #FBFFE2;
              width: 120px;
              forn-weight: 800;
           }
           .btn{
             font-size: 18px;
           }
          `}
        </style>
        <Row className="align-items-center">
          <Col md={{ span: 4, offset: 2 }}>
            <div>
              <h2 style={{ color: "#FBFFE2", fontWeight: "500" }}>
                {this.props.name}
              </h2>
              <h5 style={{ color: "#FFEBCC", fontWeight: "200" }}>
                {this.props.details}
              </h5>
              <Button
                variant="outline-light"
                onClick={() => console.log("Dark")}
              >
                {this.props.price}
                {" $"}
              </Button>
            </div>
          </Col>
          <Col md={{ span: 5, offset: 0 }} className="pb-5 pt-4">
            <img
              className="d-block align-self-end img-fluid"
              style={{
                width: " 500px",
                height: "400px",
                // paddingRight: "59px",
              }}
              src={this.props.imgSrc}
              alt={this.props.name}
            />
          </Col>
        </Row>
      </>
    );
  }
}
