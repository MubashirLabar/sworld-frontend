import Modal from "components/modal";
import ProductDetailContent from "components/productDetailContent";

const details = {
  title: "Colosseum",
  address: "Italy, Rome",
  review: 5,
  distance: "0 m",
  duration: "0 h",
  type: "Monument",
  hosting: "Italian",
  user: {
    name: "Maria Rossi",
    role: "Social media manager",
    dp: "/images/user.png",
  },
  poster: "/images/poster.webp",
  gallery: [
    "/images/poster-1.webp",
    "/images/poster-2.webp",
    "/images/poster-3.webp",
  ],
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ],
};

function LocationDetailModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} className="location-detail-modal">
      <div className="modal-hdr">
        <button className="cross-btn" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="modal-container">
        <ProductDetailContent
          data={details}
          showExternalButtons={false}
          showSocialButtons={false}
        />
      </div>
    </Modal>
  );
}

export default LocationDetailModal;
