import React from "react";
import PopupWithForm from "./PopupWithForm";


function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}){
    //const [avatarValue, setAvatarValue] = React.useState('');
    const avatarInput = React.useRef();

    /*function handleChange(e) {
        setAvatarValue(e.target.value);
      }*/
    
    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: avatarInput.current.value,
        })
      }
return (
    <PopupWithForm
          name="avatarForm"
          title="Обновить ватар"
          isOpen={isOpen}
          onClose={onClose}
          buttonSubmit="Сохранить"
          onSubmit={handleSubmit}
        >
          <input
            type="url"
            id="input-link"
            className="popup__input popup__input_field_link-avatar"
           // onChange={handleChange}
            placeholder="Ссылка на картинку"
            name="avatar"
            required
            ref={avatarInput}
          />
          <span
            id="avatar-error"
            className="popup__input-error input-link-error"
          ></span>
        </PopupWithForm>
)
}

export default EditAvatarPopup