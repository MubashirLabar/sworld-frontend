import React from "react";
import Explore from "./explore";

function Hero() {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(/images/home-hero.webp)` }}
    >
      <div className="content">
        <div className="slogan-blk">
          <img
            src="/images/global-logo.webp"
            alt="global logo"
            className="global-logo"
          />
          <div className="tag">The Future starts here</div>
          <div className="slogan">Never stop travelling around the world</div>
        </div>
      </div>
      <Explore />
    </div>
  );
}

export default Hero;
