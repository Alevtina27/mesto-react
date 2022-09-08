import "../index.css";
import React from "react";
import { useState, useEffect } from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { api } from "../utils/Api.js";

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

      api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
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


  function handleUpdateUser(name, about){
    api.editUserInfo(name, about)
    .then(userData => {
      setCurrentUser(userData)
      closeAllPopups()
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }

  function handleUpdateAvatar(avatar){
    api.changeAvatar(avatar)
    .then(data => {
      setCurrentUser(data)
      closeAllPopups()
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }

 function handleAddPlaceSubmit({name, link}){
  api
      .addCard({name, link})
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
 }

 function handleLikeClick(card){
   const isLiked = card.likes.some((i) => i._id === currentUser._id);
   api.addLikes(card._id, isLiked)
   .then((newCard) => {
     setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
   })
   .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });
   } 

   function handleCardDelete(card){
     api
     .deleteCard(card._id)
     .then(() => {
       const newCard = cards.filter((c) => c._id !== card._id);
       setCards(newCard);
     })
     .catch((err) => {
       console.log(`Ошибка: ${err}`);
     });
   }

   function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setPopupWithBigPictureOpen(false);
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
          cards={cards}
          onCardLike={handleLikeClick}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
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
