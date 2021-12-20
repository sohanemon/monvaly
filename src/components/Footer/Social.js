import React, { Component } from "react";
import facebook from "../../assets/social/facebook-brands.svg";
import twitter from "../../assets/social/twitter-brands.svg";
import github from "../../assets/social/github-brands.svg";
import youtube from "../../assets/social/youtube-brands.svg";

export default class Social extends Component {
  render() {
    return (
      <div>
        <style>
          {`
            .d-flex > div:nth-child(1) > h4:nth-child(3) {
            text-align: center;
            letter-spacing: 0.255em;
            font-size: 22px;
}

              `}
        </style>
        <div
          style={{
            display: "flex",
            height: "100px",
            width: "200px",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <img style={{ width: "30px" }} src={twitter} alt="" />
          <img style={{ width: "30px" }} src={github} alt="" />
          <img style={{ width: "30px" }} src={youtube} alt="" />
        </div>
        <h4 style={{ textAlign: "center" }}>Stay in touch</h4>
      </div>
    );
  }
}
