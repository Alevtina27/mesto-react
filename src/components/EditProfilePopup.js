import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleAboutChange(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="EditForm"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      buttonSubmit="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_field_name"
        onChange={handleNameChange}
        id="input-name"
        type="text"
        name="name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__input-error input-about-error"></span>
      <input
        type="text"
        id="input-about"
        className="popup__input popup__input_field_about"
        onChange={handleAboutChange}
        placeholder="О себе"
        name="about"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="popup__input-error input-about-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
