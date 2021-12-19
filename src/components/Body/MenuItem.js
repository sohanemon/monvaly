import React from "react";
import { Col, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function MenuItem(props) {
  return (
    <Col>
      <Card>
        <Image fluid rounded src={props.src} style={{ height: "220px" }} />

        <Card.ImgOverlay>
          <Card.Title>{props.title}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
}

export default MenuItem;
