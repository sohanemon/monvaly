import React from "react";
import Slider1 from "./Slider1";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CatCard from "./CatCard";
function Body() {
  return (
    <Container>
      <style>
        {`
        .justify-content-between{
          padding: 0px 0px;
        }
        `}
      </style>
      <Slider1 />
      <br />
      <br />
      <Row className="justify-content-between">
        <CatCard />
        <CatCard />
        <CatCard />
      </Row>
    </Container>
  );
}

export default Body;
