import React from 'react'; 

function ImagePopup({ popupName, selectedCard, onClose, isOpen }) {
    return (
        <div className={`popup popup_type_${popupName} ${isOpen && 'popup_opened'}`}
        onClick={(evt) => {
          if (evt.target.classList.contains('popup_opened')) {
            onClose();
          }
        }}
        >
        <div className="popup__image-container">
          <button
          onClick={onClose}
            type="button"
            className="popup__close"
            aria-label="close-popupImage"
          ></button>
          <figure className="popup__figure">
            <img className="popup__image" src={selectedCard.link} alt={selectedCard.name} />
            <figcaption className="popup__caption">{selectedCard.name}</figcaption>
          </figure>
        </div>
      </div>
    );
  }
    
  export default ImagePopup;