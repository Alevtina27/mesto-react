import React from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function AddPlacePopup({isOpen, onClose, onAddPlace}){
    const [name, setName] = React.useState("");
    const [link, setLink] = React.useState("");
    const currentUser = React.useContext(CurrentUserContext);

    function handleNameChange(e) {
        setName(e.target.value);
      }
    function handleLinkChange(e) {
        setLink(e.target.value);
      }

      React.useEffect(() => {
        setName(currentUser.name);
        setLink(currentUser.link);
      }, [currentUser]); 

      function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        onAddPlace({
          name,
          link,
        });
      }
    return(
<PopupWithForm
          name="AddForm"
          title="Новое место"
          isOpen={isOpen}
          onClose={onClose}
          buttonSubmit="Создать"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            id="input-title"
            className="popup__input popup__input_field_title"
            onChange={handleNameChange}
            name="name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__input-error input-title-error"></span>
          <input
            type="url"
            id="input-url"
            className="popup__input popup__input_field_link"
            onChange={handleLinkChange}
            placeholder="Ссылка на картинку"
            name="link"
            required
          />
          <span className="popup__input-error input-url-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup