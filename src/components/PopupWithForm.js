import {children} from 'react';

function PopupWithForm(props){
    const isOpened = props.isOpened
return(
<div className={`popup popup_type_${props.name}  ${isOpened ? 'popup_opened' : ''}`}>
      <div className="popup__container"></div>
        <button onClick={props.onClose} type="button" className="popup__close-icon"></button>
        <form action="#" className="popup__input-container" id={props.name} onSubmit={props.onSubmit} noValidate>
        <h2 className="popup__title">{props.title}</h2>
          {children}
          <button type="submit" className="popup__button">
            {props.name}
          </button>
        </form>
      </div>
)
}


export default PopupWithForm;

//<div className={`popup__container popup__container_form popup__container_${props.name}`}></div>