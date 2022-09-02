import "../index.css";
import React from "react";
import { useState, useEffect } from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });

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
            src={userAvatar}
            style={{ backgroundImage: `url(${userAvatar})` }}
            alt=""
            className="profile__image"
            onClick={onEditAvatar}
          />
          <div className="profile__info">
            <div className="profile__text">
              <h1 className="section-title">{userName}</h1>
              <p className="section-subtitle">{userDescription}</p>
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
