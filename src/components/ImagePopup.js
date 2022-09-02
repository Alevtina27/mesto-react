import React from "react";

function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_image ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__image-container">
        <figure className="popup__figure">
          <img src={card.link} alt={card.name} className="popup__image" />
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
        <button
          onClick={onClose}
          type="button"
          className="popup__close"
          aria-label="close-popupImage"
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
