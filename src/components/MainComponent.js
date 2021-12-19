import React from "react";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Container } from "react-bootstrap";
function MainComponent() {
  return (
    <Container fluid>
      <Container>
        <Header />
        <br />
        <Body />
        <br />
        <Footer />
      </Container>
    </Container>
  );
}

export default MainComponent;
