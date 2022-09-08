import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete  }) {
  const currentUser = React.useContext(CurrentUserContext);
const isOwn = card.owner._id === currentUser._id;
const isLiked = card.likes.some(i => i._id === currentUser._id);

const cardDeleteButtonClassName = (
  `cards__delete ${isOwn ? 'cards__delete_active' : 'cards__delete_inactive'}`
);

const cardLikeButtonClassName =  (
  `cards__like ${isLiked ? 'cards__like_active' : ''}`
  );


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
      <button 
      className={cardDeleteButtonClassName} 
      aria-label="delete-card" 
      onClick={() => {
          onCardDelete(card);
        }}>
        </button>
      <div className="cards__caption">
        <h2 className="cards__title">{card.name}</h2>
        <div className="cards__like-counter">
          <button
            onClick={() => {
              onCardLike(card);
            }}
            className={cardLikeButtonClassName}
            aria-label="like-photo"
            type="button"
          ></button>
          <span className="cards__counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
