import React from "react";
import Slider1 from "./Slider1";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CatCard from "./CatCard";
import ShowCase from "./ShowCase";
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
      <h4>Caragories</h4>
      <br />
      <Row className="justify-content-between">
        <CatCard
          name="Jacket"
          bgColor="#6a6a6a"
          src={require("./../../assets/jack2.png")}
        />
        <CatCard
          name="Clock"
          bgColor="#406080"
          src={require("./../../assets/apple.png")}
        />
        <CatCard
          name="Glass"
          bgColor="#54202d"
          src={require("./../../assets/sunGlass.png")}
        />
      </Row>
      <br />
      <ShowCase />
    </Container>
  );
}

export default Body;
