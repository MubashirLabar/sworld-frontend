import { useState } from "react";
import Login from "components/auth/Login";
import SignUp from "components/auth/SignUp";
import Modal from "components/modal";

function AuthModal({ open, onClose }) {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <Modal open={open} onClose={onClose} className="auth-modal">
      <div className="modal-hdr">
        <button className="cross-btn" onClick={onClose}>
          &times;
        </button>
      </div>
      {activeTab === "login" ? (
        <Login onClose={onClose} setActiveTab={setActiveTab} />
      ) : (
        <SignUp onClose={onClose} setActiveTab={setActiveTab} />
      )}
    </Modal>
  );
}

export default AuthModal;
