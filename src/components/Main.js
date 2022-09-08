import "../index.css";
import React from "react";
import Card from "./Card.js";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main({ cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <img
            src={currentUser.avatar}
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
            alt="Аватар"
            className="profile__image"
            onClick={onEditAvatar}
          />
          <div className="profile__info">
            <div className="profile__text">
              <h1 className="section-title">{currentUser.name}</h1>
              <p className="section-subtitle">{currentUser.about}</p>
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
        {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              link={card.link}
              name={card.name}
              cardLike={card.likes.length}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
              currentUser={currentUser}
            />
          )
        )}
      </section>
    </main>
  );
}

export default Main;
