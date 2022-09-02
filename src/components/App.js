import "../index.css";
import React from "react";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [popupWithBigPictureOpen, setPopupWithBigPictureOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setPopupWithBigPictureOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setPopupWithBigPictureOpen(false);
  }

  return (
    <div className="app">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <Footer />
        <PopupWithForm
          name="EditForm"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonSubmit="Сохранить"
        >
          <input
            className="popup__input popup__input_field_name"
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
            placeholder="О себе"
            name="about"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error input-about-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="AddForm"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonSubmit="Создать"
        >
          <input
            type="text"
            id="input-title"
            className="popup__input popup__input_field_title"
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
            placeholder="Ссылка на картинку"
            name="link"
            required
          />
          <span className="popup__input-error input-url-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="avatarForm"
          title="Обновить ватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonSubmit="Сохранить"
        >
          <input
            type="url"
            id="input-link"
            className="popup__input popup__input_field_link-avatar"
            placeholder="Ссылка на картинку"
            name="avatar"
            required
          />
          <span
            id="avatar-error"
            className="popup__input-error input-link-error"
          ></span>
        </PopupWithForm>
        <ImagePopup
          card={selectedCard}
          isOpen={popupWithBigPictureOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name="deleteForm"
          title="Вы уверены?"
          buttonSubmit="Да"
        ></PopupWithForm>
      </div>
    </div>
  );
}

export default App;
