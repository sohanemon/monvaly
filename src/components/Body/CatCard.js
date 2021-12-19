import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CatCard(props) {
  return (
    <>
      <Col md={{ span: 4 }}>
        <a href="http://" style={{ textDecoration: "none" }}>
          <Card
            className="rounded p-3"
            style={{ backgroundColor: props.bgColor }}
          >
            <Row className="align-items-center">
              <Col md={7}>
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "#FFEBCC",
                      fontSize: "18px",
                      fontWeight: "500",
                      lineHeight: "0",
                      letterSpacing: "0.317em",
                      fontStyle: "normal",
                      padding: "0px 0px 0px 10px",
                    }}
                  >
                    {props.name}
                  </Card.Title>
                </Card.Body>
              </Col>
              <Col md={5}>
                <img
                  style={{ height: "80px", width: "80px" }}
                  className="img-fluid"
                  src={props.src}
                  alt={props.name}
                />
              </Col>
            </Row>
          </Card>
        </a>
      </Col>
    </>
  );
}

export default CatCard;
