import { Col, Card, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import React, { Component } from "react";

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insideBtn: "Buy Now",
      cardBorder: {},
      size: { height: "200px", width: "200px" },
    };
  }
  defaultState() {
    this.setState({
      insideBtn: "Buy Now",
      cardBorder: {},
      size: { height: "200px", width: "200px" },
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
          <small>Price: 500</small>
        </>
      ),
      cardBorder: { border: "solid 1px red" },
      size: { height: "210px", width: "210px" },
    });
  }
  render() {
    return (
      <Col>
        <style>{`
      .btn-light{
        border-top: solid 1px pink;
        color: #ff5a5a;
      }
      
      `}</style>
        <Card
          style={this.state.cardBorder}
          style={this.state.size}
          onMouseOver={() => this.handleStyle()}
          onMouseOut={() => this.defaultState()}
        >
          <Image
            fluid
            rounded
            src={this.props.src}
            style={{ height: this.state.height, width: this.state.width }}
          />

          {/* <Card.ImgOverlay>
          <Card.Title>{this.props.title}</Card.Title>
        </Card.ImgOverlay> */}
          <Button
            variant="light"
            size="sm"
            onClick={() => this.handleInside(this)}
            onMouseOver={() => this.handleStyle()}
            onMouseOut={() => this.defaultState()}
          >
            {this.state.insideBtn}
          </Button>
        </Card>
      </Col>
    );
  }
}
