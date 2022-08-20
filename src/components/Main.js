import React from 'react';


function Main(props) {
  const onEditProfile = props.onEditProfile;
  const onAddPlace  = props.onAddPlace ;
  const onEditAvatar = props.onEditAvatar;

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
          </main>
    );
    }
    
  export default Main;