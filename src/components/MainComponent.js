import React from "react";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Container } from "react-bootstrap";
function MainComponent() {
  return (
    <Container>
      <Header />
      <br />
      <Body />
      <br />
      <hr />
      <br />
      <Footer />
    </Container>
  );
}

export default MainComponent;
