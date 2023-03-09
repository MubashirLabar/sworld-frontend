import React, { useState } from "react";
import { LocationIcon } from "assets/icons";
import LocationDetailModal from "modals/LocationDetailModal";

function Message() {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="chatbot_message from-user">
        <div className="dp">You</div>
        <div className="meta">
          <div className="text">
            Hi, I’m interested in the Colosseum in Rome
          </div>
        </div>
      </div>
      <div className="chatbot_message">
        <div className="dp">AI</div>
        <div className="meta">
          <div className="text">
            Of course, the Colosseum is one of the most visited monuments in
            Rome. Here is some information. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Here some links:{" "}
            <span>https://sworld/Colosseo-a-Roma</span>
          </div>
          <div className="attachment" onClick={() => setOpenModal(true)}>
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
          </div>
        </div>
      </div>
      <div className="chatbot_message from-user">
        <div className="dp">You</div>
        <div className="meta">
          <div className="text">Thank you. I saved it.</div>
        </div>
      </div>
      <LocationDetailModal open={openModal} onClose={handleCloseModal} />
    </>
  );
}

export default Message;
