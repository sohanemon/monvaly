import React from "react";
import { Row, Carousel } from "react-bootstrap";
import MenuItem from "./MenuItem";
function MenuSlide(props) {
  return (
    <>
      <Row className="justify-item-between">
        <MenuItem name={props.name1} src={props.src1} />
        <MenuItem name={props.name2} src={props.src2} />
        <MenuItem name={props.name3} src={props.src3} />
        <MenuItem name={props.name4} src={props.src4} />
      </Row>
    </>
  );
}

export default MenuSlide;
