import "../index.css";
import React from "react";
import { useState, useEffect } from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main({onEditProfile, onAddPlace, onEditAvatar, cards, onCardClick, handleLikeClick, handleCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext);

  //const [name, setUserName] = useState("");
 //const [about, setUserDescription] = useState("");
 // const [avatar, setUserAvatar] = useState("");


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
        {cards.map((card) => 
          (
            <Card
              card={card}
              key={card._id}
              link={card.link}
              name={card.name}
              onCardClick={onCardClick}
              onCardLike={handleLikeClick}
              onCardDelete={handleCardDelete}
              cardLike={card.likes.length}
              currentUser={currentUser}
            />
          )
        )}
        ;
      </section>
    </main>
  );
}

export default Main;
