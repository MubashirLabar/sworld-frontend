import { useState } from "react";
import Modal from "components/modal";
import Radio from "components/atoms/Radio";
import Checkbox from "components/atoms/Checkbox";

function AdvertiseModal({ open, onClose }) {
  const [agreeTerm, setAgreeTerm] = useState(false);

  return (
    <Modal open={open} onClose={onClose} className="advertise-modal">
      <div className="modal-hdr">
        <button className="cross-btn" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="modal-container">
        <div className="text">
          As soon as we receive the message, the team will get in touch with you
        </div>
        <div className="contact-form">
          <div className="field-row">
            <div className="field-control">
              <div className="field">
                <input
                  type="text"
                  className="input"
                  placeholder="First name"
                ></input>
              </div>
            </div>
            <div className="field-control">
              <div className="field">
                <input
                  type="text"
                  className="input"
                  placeholder="Last name"
                ></input>
              </div>
            </div>
          </div>
          <div className="field-row">
            <div className="field-control">
              <div className="field">
                <input
                  type="text"
                  className="input"
                  placeholder="Email address"
                ></input>
              </div>
            </div>
            <div className="field-control">
              <div className="field">
                <input
                  type="text"
                  className="input"
                  placeholder="Phone number"
                ></input>
              </div>
            </div>
          </div>
          <div className="about-block">
            <div className="label">Advertising Type:</div>
            <div className="options">
              {[...Array(6)].map((_, index) => (
                <AdvertiseOption key={index} />
              ))}
            </div>
            <div className="field-control">
              <div className="field">
                <textarea
                  type="text"
                  className="input textarea"
                  placeholder="Company description"
                ></textarea>
              </div>
            </div>
            <div className="field-control website-link">
              <div className="field">
                <input
                  type="text"
                  className="input"
                  placeholder="Website link"
                ></input>
              </div>
              <label className="term">
                <Checkbox
                  className="checkbox"
                  check={agreeTerm}
                  setCheck={setAgreeTerm}
                />
                I agree Terms & Conditions
              </label>
            </div>
          </div>
          <div className="form-ftr">
            <button className="action">Send Message</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

const AdvertiseOption = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <label className="item">
      <div className="lbl">Lorem Ipsum</div>
      <Radio check={isSelected} setCheck={setIsSelected} />
    </label>
  );
};

export default AdvertiseModal;
