import React, { useState } from "react";
import { LocationIcon } from "assets/icons";
import LocationDetailModal from "modals/LocationDetailModal";
import Typewriter from "components/atoms/Typewriter";

function AIMessage({ message, chatWindowRef }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState();
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="chatbot_message">
        <div className="dp">AI</div>
        <div className="meta">
          <Typewriter className="text" delay={20} text={message.answer} />
          {/* <div className="text">
            {message.text}
            <span>https://sworld/Colosseo-a-Roma</span>
          </div> */}
          {message?.places?.length > 0
            ? message?.places.map((item, index) => (
                <div key={index} className="attachment">
                  <div
                    className="image"
                    style={{ backgroundImage: `url(/images/colosseo.webp)` }}
                  />
                  <div className="info">
                    <div className="title">{item.name}</div>
                    <div className="location">
                      <LocationIcon />
                      {item.address ? item.address : `N/A`}
                    </div>
                    <div className="description ellipsis-3">
                      {item.description}
                    </div>
                    <div className="btns">
                      <button
                        className="btn"
                        onClick={() => {
                          setOpenModal(true);
                          setSelectedPlace(item);
                        }}
                      >
                        View more
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
      <LocationDetailModal
        open={openModal}
        onClose={handleCloseModal}
        data={selectedPlace}
      />
    </>
  );
}

export default AIMessage;
