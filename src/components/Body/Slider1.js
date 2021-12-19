import React, { Component } from "react";
import { Carousel, Container } from "react-bootstrap";
import SliderPhoto from "./SliderPhoto";
// import shoes from "../../../assets/shoes_img/shoes (1).img";

class Slider1 extends Component {
  details =
    "animi possimus voluptates accusamus minus debitis, eius blanditiis!";
  render() {
    return (
      <Container className="rounded" style={{ backgroundColor: "#FF9999" }}>
        <Carousel>
          <Carousel.Item>
            <SliderPhoto
              name="Blue Nike Shoe"
              details={this.details}
              imgSrc="https://freepngimg.com/thumb/categories/627.png"
              price="299"
            />
          </Carousel.Item>
          <Carousel.Item>
            <SliderPhoto
              name="HP pro Laptop"
              details={this.details}
              imgSrc="https://pngimg.com/uploads/laptop/laptop_PNG5905.png"
              price="400"
            />
          </Carousel.Item>
          <Carousel.Item>
            <SliderPhoto
              name="IPhone 11 Pro"
              details={this.details}
              price="900"
              imgSrc="https://freepngimg.com/thumb/apple_iphone/133290-11-pic-apple-iphone-free-download-png-hd.png"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default Slider1;
