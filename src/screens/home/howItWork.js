import React from "react";

function HowItWork() {
  const Title = () => <div className="title">How Sworld works with AI?</div>;

  return (
    <div className="how-it-works-section">
      <div className="foreground-title">AI of the future</div>
      <div className="wrap app-width">
        <div className="section">
          <div className="ls">
            {Title()}
            <div
              className="image"
              style={{ backgroundImage: `url(/images/how-ai-work.png)` }}
            />
          </div>
          <div className="rs">
            {Title()}
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
        <div className="map-section">
          <div className="ls">
            <div className="title">Discover the world with us</div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <div className="rs">
            <img src="/images/map.webp" className="image" />
          </div>
        </div>
      </div>
      <img
        src="/images/line-top-right.webp"
        alt=""
        className="line-top-right"
      />
      <img src="/images/line-top-left.webp" alt="" className="line-top-left" />
      <img
        src="/images/line-bottom-left.webp"
        alt=""
        className="line-bottom-left"
      />
      <img
        src="/images/line-bottom-right.webp"
        alt=""
        className="line-bottom-right"
      />
    </div>
  );
}

export default HowItWork;
