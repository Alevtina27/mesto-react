import React from 'react'; 

function ImagePopup(props) {
  const {card, isOpen, onClose} = props;
  console.log(card)
    return (
        <div className={`popup popup_type_image ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__image-container">
          <button
          onClick={onClose}
            type="button"
            className="popup__close"
            aria-label="close-popupImage"
          ></button>
          <figure className="popup__figure">
          <img src={card.link} alt={card.name} className="popup__image" />
            <figcaption className="popup__caption">{card.name}</figcaption>
            </figure>
        </div>
      </div>
    );
  }

  export default ImagePopup;