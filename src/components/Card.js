import React from "react";

function Card({ card, onCardClick }) {
  return (
    <li className="cards__element">
      <img
        src={card.link}
        alt={card.name}
        className="cards__photo"
        onClick={() => {
          onCardClick(card);
        }}
      />
      <button className="cards__delete" aria-label="delete-card"></button>
      <div className="cards__caption">
        <h2 className="cards__title">{card.name}</h2>
        <div className="cards__like-counter">
          <button
            type="button"
            aria-label="like-photo"
            className="cards__like button"
          ></button>
          <span className="cards__counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
