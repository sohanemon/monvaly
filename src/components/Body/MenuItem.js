import { Col, Card, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insideBtn: (
        <>
          <FontAwesomeIcon icon="cart-plus" /> Add to Cart
        </>
      ),
      cardBorder: {},
      size: { height: "220px", width: "auto" },
    };
  }
  defaultState() {
    this.setState({
      insideBtn: (
        <>
          <FontAwesomeIcon icon="cart-plus" /> Add to Cart
        </>
      ),
      cardBorder: {},
      size: { height: "220px", width: "auto" },
    });
  }
  handleInside(item) {
    this.item.style.color = "red";
    this.setState({
      insideBtn: (
        <>
          <small>Featue is coming..</small>
        </>
      ),
    });
  }
  handleStyle() {
    this.setState({
      insideBtn: (
        <>
          <small style={{ fontSize: "17px", fontWeight: "500" }}>500$</small>
          <small
            style={{
              fontSize: "10px",
              fontWeight: "900",
              marginLeft: "3px",
              border: "1px solid red",
              borderRadius: "5px",
              padding: "0px 2px",
            }}
          >
            50% off
          </small>
        </>
      ),
      padding: "0px",
      cardBorder: { border: "solid 1px red" },
    });
  }
  handleStyleBtn = () => {
    this.setState({
      insideBtn: (
        <>
          {" "}
          <FontAwesomeIcon icon="coins" />
          <small
            style={{
              fontSize: "17px",
              paddingLeft: "5px",
              fontWeight: "500",
              color: "#194D33",
            }}
          >
            Buy Now
          </small>
        </>
      ),
      cardBorder: { border: "solid 1px red" },
    });
  };
  render() {
    return (
      <Col>
        <style>{`
      .btn-light{
        border-top: solid 1px pink;
        color: #ff5a5a;
      }
      
      `}</style>
        <Card style={this.state.cardBorder}>
          <Image
            onMouseOver={() => this.handleStyle()}
            onMouseOut={() => this.defaultState()}
            fluid
            rounded
            src={this.props.src}
            style={this.state.size}
          />

          <Button
            variant="light"
            size="sm"
            onClick={() => this.handleInside(this)}
            onMouseOver={() => this.handleStyleBtn()}
            onMouseOut={() => this.defaultState()}
          >
            {this.state.insideBtn}
          </Button>
        </Card>
      </Col>
    );
  }
}
