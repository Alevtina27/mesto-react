import React from 'react';


function Main() {
    function handleEditAvatarClick (){
        document.querySelector('.popup_type_avatar').classList.add('.popup_opened');
    };
    function handleEditProfileClick() {
        document.querySelector('.popup_type_edit').classList.add('.popup_opened');
      };
      function handleAddPlaceClick () {
        document.querySelector('.popup_type_add').classList.add('.popup_opened');
    };
    return (
        <main className="content">
        <section className="profile">
            <div className="profile__container">
              <img
                src=""
                alt=""
                className="profile__image"
              />
              <div className="profile__info">
                <div className="profile__text">
                  <h1 className="section-title">Alevtina</h1>
                  <p className="section-subtitle">Student</p>
                </div>
                <button
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
            ></button>
          </section>
          </main>
    );
    /*const buttonEdit = document.querySelector(
        ".profile__button_action_edit"
      );
      buttonEdit.addEventListener('click', function handleEditProfileClick() {
        document.querySelector('.popup_type_edit').classList.add('.popup_opened');
    });
    function handleEditAvatarClick (){
        document.querySelector('.popup_type_avatar').classList.add('.popup_opened');
    };
    
    document.querySelector('.profile__image').addEventListener('click', handleEditAvatarClick());
    const buttonEdit = document.querySelector(
        ".profile__button_action_edit"
      );

      function handleEditProfileClick() {
        document.querySelector('.popup_type_edit').classList.add('.popup_opened');
      }

      buttonEdit.addEventListener('click',  handleEditProfileClick());
    function handleAddPlaceClick () {
        document.querySelector('.popup_type_add').classList.add('.popup_opened');
    };
    document.querySelector('.profile__button_action_add').addEventListener('click', handleAddPlaceClick());*/
  }
    
  export default Main;