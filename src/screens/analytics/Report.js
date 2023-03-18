import React, { useState } from "react";
import { UsersIcon } from "assets/icons";
import AdvertiseModal from "modals/AdvertiseModal";

function Report() {
  const [openRequestModal, setOpenRequestModal] = useState(false);

  const closeRequestModal = () => {
    setOpenRequestModal(false);
  };

  return (
    <>
      <div className="analytics_report-section">
        <img
          src="/images/analytics-line-top-left.webp"
          alt=""
          className="line-top-left"
        />
        <img
          src="/images/analytics-line-top-right.webp"
          alt=""
          className="line-top-right"
        />
        <img
          src="/images/analytics-line-bottom-left.webp"
          alt=""
          className="line-bottom-left"
        />
        <img
          src="/images/analytics-line-bottom-right.webp"
          alt=""
          className="line-bottom-right"
        />
        <div className="foreground-title">Grow your Business</div>
        <div className="wrapper app-width">
          <div className="title">Report Google Analytics</div>
          <div className="users-activities">
            <div className="item">
              <div className="meta">
                <UsersIcon />
                12- Month Active Users
              </div>
              <div className="number">169.4 million</div>
            </div>
            <div className="item days">
              <div className="meta">
                <UsersIcon />
                30- Days Active Users
              </div>
              <div className="number">8.17 million</div>
            </div>
            <div className="item yesterday">
              <div className="meta">
                <UsersIcon />
                Active Users yesterday
              </div>
              <div className="number">423.83 thousand</div>
            </div>
          </div>
          <div className="graph-block">Report Graph</div>
          <button
            className="request-btn"
            onClick={() => setOpenRequestModal(!openRequestModal)}
          >
            Invia Advertising Request
          </button>
        </div>
      </div>
      <AdvertiseModal open={openRequestModal} onClose={closeRequestModal} />
    </>
  );
}

export default Report;
