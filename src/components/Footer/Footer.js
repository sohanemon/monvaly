import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactUs from "./ContactUs.js";
import Social from "./Social.js";
function Footer() {
  return (
    <>
      <Row className="p-4  rounded m-3" style={{ backgroundColor: "#F999B7" }}>
        <h4
          style={{
            textAlign: "center",
            textDecoration: "underline",
            color: "#FFEBCC",
          }}
        >
          Subscribe
        </h4>
        <Col className="px-5">
          <ContactUs />
        </Col>
      </Row>
      <Row className="p-4  rounded m-3" style={{ backgroundColor: "#30475E" }}>
        <h4
          style={{
            textAlign: "center",
            textDecoration: "underline",
            color: "#121212",
          }}
        >
          Contact Us
        </h4>
        <Col className="d-flex justify-content-center">
          <Social />
        </Col>
      </Row>
      <Row style={{ textAlign: "center" }}>
        <Col>
          <FontAwesomeIcon icon="copyright" />
          <small>All rights reserved by @sohanemon</small>
        </Col>
      </Row>
    </>
  );
}

export default Footer;
