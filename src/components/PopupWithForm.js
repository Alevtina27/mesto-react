//import {children} from 'react';

function PopupWithForm({ popupName, title, children, isOpen, onClose, buttonText }) {
    //const isOpen = props.isOpen;
return(
<div className={`popup popup_type_${popupName}  ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button onClick={onClose} type="button" className="popup__close"></button>
        <form action="#" className="popup__input-container" id={popupName} onSubmit={onClose} noValidate>
        <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className="popup__button">
            {buttonText}
          </button>
        </form>
      </div>
      </div>
)
}
export default PopupWithForm;

