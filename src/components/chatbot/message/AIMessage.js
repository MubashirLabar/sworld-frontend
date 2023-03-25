import React, { useState } from "react";
import { LocationIcon } from "assets/icons";
import LocationDetailModal from "modals/LocationDetailModal";
import Typewriter from "components/atoms/Typewriter";

function AIMessage({ message, chatWindowRef }) {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="chatbot_message">
        <div className="dp">AI</div>
        <div className="meta">
          <Typewriter className="text" delay={20} text={message.text} />
          {/* <div className="text">
            {message.text}
            <span>https://sworld/Colosseo-a-Roma</span>
          </div> */}
          {/* <div className="attachment" onClick={() => setOpenModal(true)}>
            <div
              className="image"
              style={{ backgroundImage: `url(/images/colosseo.webp)` }}
            />
            <div className="info">
              <div className="title">Colosseum</div>
              <div className="location">
                <LocationIcon />
                Italy, Rome
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam...
              </div>
              <div className="btns">
                <button className="btn">View more</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <LocationDetailModal open={openModal} onClose={handleCloseModal} />
    </>
  );
}

export default AIMessage;
