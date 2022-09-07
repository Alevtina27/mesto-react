import "../index.css";
import React from "react";
import { useState, useEffect } from "react";
import { api } from "../utils/Api.js";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import {CurrentUserContext} from "../contexts/CurrentUserContext"

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [popupWithBigPictureOpen, setPopupWithBigPictureOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const [currentUser, setCurrentUser] = useState({});

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);
 

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

  function handleUpdateUser(name, about){
    api.getUserInfo(name, about)
    .then(userData => {
      setCurrentUser(userData)
      closeAllPopups()
    })
  }

  function handleUpdateAvatar(avatar){
    api.changeAvatar(avatar)
    .then(data => {
      setCurrentUser(data)
      closeAllPopups()
    })
  }
 
  useEffect(() => {
    /*api
      .getUserInfo()
      .then((data) => {
       // currentUser(data);
        //setUserName(data.name);
       // setUserDescription(data.about);
        //setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });*/
 
    api
      .getInitialCards()
      .then((data) => {
        setCards(...cards, data);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

 function handleLikeClick(card){
   const isLiked = card.likes.some(i => i._id === currentUser._id);
   api.addLikes(card._id, !isLiked).then((newCard) => {
     setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
   });
   } 

   function handleCardDelete(card){
     api
     .deleteCard(card._id)
     .then((res) => {
       const newCard = cards.filter((item) => item._id !== card._id);
       setCards(newCard);
     })
     .catch((err) => {
       console.log(`Ошибка: ${err}`);
     });
   }

 

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="app">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          //onCardLike={handleLikeClick}
        />

        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
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
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
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
    </CurrentUserContext.Provider>
  );
}

export default App;
