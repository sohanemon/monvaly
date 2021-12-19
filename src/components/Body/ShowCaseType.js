import React from "react";
import { Carousel } from "react-bootstrap";
import MenuSlide from "./MenuSlide";

function GrossaryShowCase(props) {
  return (
    <>
      <style>{`
     .carousel-indicators {
display: none;
}
      `}</style>
      <Carousel interval={3000}>
        <Carousel.Item>
          <MenuSlide
            src1={props.src1}
            src2={props.src2}
            src3={props.src3}
            src4={props.src4}
          />
        </Carousel.Item>
        <Carousel.Item>
          <MenuSlide
            src1={props.src6}
            src2={props.src5}
            src3={props.src7}
            src4={props.src8}
          />
        </Carousel.Item>
        <Carousel.Item>
          <MenuSlide
            src1={props.src9}
            src2={props.src10}
            src3={props.src11}
            src4={props.src12}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default GrossaryShowCase;
