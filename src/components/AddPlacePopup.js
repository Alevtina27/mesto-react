import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [cardName, setcardName] = React.useState("");
  const [cardLink, setcardLink] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(e) {
    setcardName(e.target.value);
  }
  function handleLinkChange(e) {
    setcardLink(e.target.value);
  }

  React.useEffect(() => {
    setcardName(currentUser.cardName);
    setcardLink(currentUser.cardLink);
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: cardName,
      link: cardLink,
    });
  }
  return (
    <PopupWithForm
      name="AddForm"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      buttonSubmit="Создать"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="input-title"
        className="popup__input popup__input_field_title"
        onChange={handleNameChange}
        value={cardName || ''}
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="popup__input-error input-title-error"></span>
      <input
        type="url"
        id="input-url"
        className="popup__input popup__input_field_link"
        onChange={handleLinkChange}
        value={cardLink || ''}
        placeholder="Ссылка на картинку"
        name="link"
        required
      />
      <span className="popup__input-error input-url-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
