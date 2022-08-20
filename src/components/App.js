import React from 'react'; 
import {useState, useEffect} from 'react';
//import LogoMesto from '../LogoMesto.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(true);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(true);

  function handleEditAvatarClick (){
    const popupAvatar = document.querySelector(".popup_type_avatar");
    popupAvatar.classList.add('.popup_opened');
};
const handleEditProfileClick = () => {
  const popupEdit = document.querySelector(".popup_type_edit");
  popupEdit.classList.add('.popup_opened');
 setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };
  function handleAddPlaceClick () {
    const popupAddCard = document.querySelector(".popup_type_add");
    popupAddCard.classList.add('.popup_opened');
};

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
    <div className="App">
      <div className="page">
      <Header />
      <Main 
       onEditAvatar={handleEditAvatarClick}
       onEditProfile={handleEditProfileClick}
       onAddPlace={handleAddPlaceClick}
      />
        <Footer />
      <PopupWithForm />
      <ImagePopup />
      </div>
      <template id="element-template" className="element-template">
      <li className="cards__element">
        <img src="#" alt="#" className="cards__photo" />
        <button className="cards__delete" aria-label="delete-card"></button>
        <div className="cards__caption">
          <h2 className="cards__title"></h2>
          <div className="cards__like-counter">
            <button
              type="button"
              aria-label="like-photo"
              className="cards__like button"
            ></button>
            <span className="cards__counter"></span>
          </div>
        </div>
      </li>
    </template>
    </div>
  );
}

export default App;
