import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useEffect } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarInput = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarInput.current.value,
    });
  }

  useEffect(() => {
    avatarInput.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatarForm"
      title="Обновить ватар"
      isOpen={isOpen}
      onClose={onClose}
      buttonSubmit="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        id="input-link"
        className="popup__input popup__input_field_link-avatar"
        placeholder="Ссылка на картинку"
        name="avatar"
        required
        ref={avatarInput}
      />
      <span
        id="avatar-error"
        className="popup__input-error input-link-error"
      ></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
