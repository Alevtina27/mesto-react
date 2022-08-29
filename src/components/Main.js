import React from 'react';
import api from '../utils/Api.js'
import Card from './Card.js';
import {useState, useEffect} from 'react';

export default function Main(props){
 const {onEditProfile, onAddPlace, onEditAvatar, onCardClick} = props; 
 /* const onEditProfile = props.onEditProfile;
  const onAddPlace  = props.onAddPlace ;
  const onEditAvatar = props.onEditAvatar;
  const onCardClick = props.onCardClick;*/

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo()])
      .then(data => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      // setCards(cards);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => console.log('work'));

      api
      .getInitialCards()
      .then((item) => {
        setCards(...cards, item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 
  /*function handleEditAvatarClick (){
    document.querySelector('.popup_type_avatar').classList.add('.popup_opened');
};
function handleEditProfileClick() {
    document.querySelector('.popup_type_edit').classList.add('.popup_opened');
  };
  function handleAddPlaceClick () {
    document.querySelector('.popup_type_add').classList.add('.popup_opened');
};*/
    return (
        <main className="content">
        <section className="profile">
            <div className="profile__container">
              <img
                src=""
                alt=""
                className="profile__image"
                onClick={onEditAvatar}
              />
              <div className="profile__info">
                <div className="profile__text">
                  <h1 className="section-title">Alevtina</h1>
                  <p className="section-subtitle">Student</p>
                </div>
                <button
                onClick={onEditProfile}
                  type="button"
                  name="button"
                  aria-label="open-popup"
                  className="button profile__button profile__button_action_edit"
                ></button>
              </div>
            </div>
            <button
              type="button"
              name="button"
              aria-label="add"
              className="button profile__button profile__button_action_add"
              onClick={onAddPlace}
            ></button>
          </section>
          <section className="elements">
        {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
             // onCardLike={onCardLike}
             // onCardDeleteClick={onCardDeleteClick}
            />
        ))};
      </section>
         
          </main>
    );
    }
  