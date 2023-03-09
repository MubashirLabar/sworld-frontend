import { MinusIcon, PlusIcon } from "assets/icons";
import React, { useState } from "react";

const sharingOptionsList = [
  {
    label: "Whatsapp",
    image: "/images/whatsapp.svg",
  },
  {
    label: "Facebook",
    image: "/images/facebook.svg",
  },
  {
    label: "Instagram",
    image: "/images/instagram.svg",
  },
  {
    label: "Google Gmail",
    image: "/images/google-gmail.svg",
  },
  {
    label: "Twitter",
    image: "/images/twitter.svg",
  },
  {
    label: "Telegram",
    image: "/images/telegram.svg",
  },
  {
    label: "Discord",
    image: "/images/discord.svg",
  },
  {
    label: "Google Photos",
    image: "/images/google-photos.svg",
  },
  {
    label: "Google Drive",
    image: "/images/google-drive.svg",
  },
];

function SharingOptions() {
  const [expendOptions, setExpendOptions] = useState(false);
  const activeOptions = expendOptions ? sharingOptionsList.length : 5;

  return (
    <div className="sharing-options">
      {sharingOptionsList.slice(0, activeOptions).map((item, i) => (
        <button key={i} className="share-btn">
          <img src={item.image} alt={item.label} className="icon" />
        </button>
      ))}
      <div className="sharing-actions">
        {expendOptions ? (
          <button
            className="expend"
            onClick={() => setExpendOptions(!expendOptions)}
          >
            <MinusIcon />
          </button>
        ) : (
          <button
            className="expend"
            onClick={() => setExpendOptions(!expendOptions)}
          >
            <PlusIcon />
          </button>
        )}
      </div>
    </div>
  );
}

export default SharingOptions;
