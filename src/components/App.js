import '../index.css'
import React from 'react'; 
import {useState} from 'react';
//import LogoMesto from '../LogoMesto.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
//import Card from './Card';
//import api from '../utils/Api.js'



function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

//const isEditProfilePopupOpen = {
  //isOpen: false
//}
function handleCardClick(card) {
  setImagePopupOpen(true);
  setSelectedCard(card);
}


  


  /*function handleEditAvatarClick (){
    const popupAvatar = document.querySelector(".popup_type_avatar");
    popupAvatar.classList.add('.popup_opened');
};
function handleEditProfileClick (){
  const popupEdit = document.querySelector(".popup_type_edit");
  popupEdit.classList.add('.popup_opened');
 /// isEditProfilePopupOpen.isOpen = !isEditProfilePopupOpen.isOpen;
  };


  function handleAddPlaceClick () {
    const popupAddCard = document.querySelector(".popup_type_add");
    popupAddCard.classList.add('.popup_opened');
};*/

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
   // setSelectedCard({});
  }

  
  /*function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }*/

  return (
      <div className="page">
      <Header />
      <Main 
       onEditAvatar={setIsEditAvatarPopupOpen}
       onEditProfile={setIsEditProfilePopupOpen}
       onAddPlace={setIsAddPlacePopupOpen}
       onCardClick={handleCardClick}
      />
      
        <Footer />
      <PopupWithForm 
       popupName="EditForm"
       title="Редактировать профиль"
       isOpen={isEditProfilePopupOpen}
       onClose={closeAllPopups}
       buttonText="Сохранить"
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
        popupName="AddForm"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Создать"
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
        popupName="avatarForm"
        title="Обновить ватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
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
      <ImagePopup popupName="popup_type_image" selectedCard={selectedCard} onSubmit={closeAllPopups} isOpen={isImagePopupOpen}/>
      <PopupWithForm popupName="deleteForm" title="Вы уверены?" buttonText='Да'></PopupWithForm>
      </div>
      
  );
}

export default App;
