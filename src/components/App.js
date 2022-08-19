import React from 'react'; 
//import LogoMesto from '../LogoMesto.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <div className="App">
      <div className="page">
      <Header />
      <Main />
        <Footer />
      <PopupWithForm />
      </div>
      <template id="element-template" className="element-template">
      <li className="cards__element">
        <img src="#" alt="#" className="cards__photo" />
        <button className="cards__delete" aria-label="delete-card"></button>
        <div className="cards__caption">
          <h2 className="cards__title"></h2>
          <div className="cards__like-counter">
            <button
              type="button"
              aria-label="like-photo"
              className="cards__like button"
            ></button>
            <span className="cards__counter"></span>
          </div>
        </div>
      </li>
    </template>
    </div>
  );
}

export default App;
