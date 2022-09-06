import "../index.css";
import React from "react";
import { useState, useEffect } from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  /*const [currentUser, serCurrentUser] = useState({ avatar: '../images/spinner/loader.gif',
  name: 'Загрузка',
  about: 'Загрузка',});*/

  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;

  //const [name, setUserName] = useState("");
 //const [about, setUserDescription] = useState("");
 // const [avatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

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
      .catch((err) => console.log(err))
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

  

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <img
            //src={userAvatar}
            //style={{ backgroundImage: `url(${userAvatar})` }}
            alt="Аватар"
            className="profile__image"
            onClick={onEditAvatar}
          />
          <div className="profile__info">
            <div className="profile__text">
              <h1 className="section-title"></h1>
              <p className="section-subtitle"></p>
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
      <section className="cards">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              key={card._id}
              link={card.link}
              name={card.name}
              onCardClick={onCardClick}
              onCardLike={handleLikeClick}
              onCardDelete={handleCardDelete}
              cardLike={card.likes.length}
            />
          );
        })}
        ;
      </section>
    </main>
  );
}

export default Main;
