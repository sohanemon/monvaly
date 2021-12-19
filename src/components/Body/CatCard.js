import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cat1 from "./../../assets/cat1.png";

function CatCard() {
  return (
    <Col md={{ span: 4 }}>
      <a href="http://" style={{ textDecoration: "none" }}>
        <Card
          style={{
            backgroundColor: "#FF9999",
          }}
          className="rounded"
        >
          <Row className="align-items-center">
            <Col md={7}>
              <Card.Body>
                <Card.Title
                  style={{
                    color: "#FFEBCC",
                    fontSize: "23px",
                    fontWeight: "500",
                    lineHeight: "0",
                    letterSpacing: "0.317em",
                    fontStyle: "normal",
                    padding: "0px 0px 0px 10px",
                  }}
                >
                  Cloakc
                </Card.Title>
              </Card.Body>
            </Col>
            <Col md={5}>
              <img
                style={{ height: "80px", width: "80px" }}
                className="img-fluid"
                src={cat1}
                alt=""
              />
            </Col>
          </Row>
        </Card>
      </a>
    </Col>
  );
}

export default CatCard;
