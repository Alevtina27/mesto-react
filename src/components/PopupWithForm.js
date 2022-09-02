import { children } from "react";

function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose,
  buttonSubmit,
}) {
  return (
    <div
      className={`popup popup_type_${name}  ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button
          onClick={onClose}
          type="button"
          className="popup__close"
        ></button>
        <form
          action="#"
          className="popup__input-container"
          id={name}
          onSubmit={onClose}
          noValidate
        >
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className="popup__button">
            {buttonSubmit}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
