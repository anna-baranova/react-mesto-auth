import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
// import Card from "./Card";


function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setiIsAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState({})

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setiIsAddPlacePopupOpen(true)
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    function handleCardClick(item) {
        setIsImagePopupOpen(true)
        setSelectedCard(item)
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false)
        setiIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsImagePopupOpen(false)

    }

  return (
    <>
    <div className="page">
        <div className="page__container">
            <Header />
            <Main 
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                 />
            <Footer />
        </div> 

        <PopupWithForm name='edit' title='Редактировать профиль' buttonName='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
            <input type="text" className="form__input form__input_type_name" id="your-name" name="input-name" 
            placeholder="Имя" required minLength="2" maxLength="40"/>
            <span className="form__input-error" id="your-name-error"></span>
            <input type="text" className="form__input form__input_type_job" id="your-job" name="input-job" 
            placeholder="Занятие" required minLength="2" maxLength="200"/>
            <span className="form__input-error" id="your-job-error"></span>  
        </PopupWithForm>

        <PopupWithForm name='add-card' title='Новое место' buttonName='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
            <input type="text" className="form__input form__input_type_place" id="travel-place" name="input-place" 
            placeholder="Название" required minLength="2" maxLength="30"/>
            <span className="form__input-error" id="travel-place-error"></span>
            <input type="url" className="form__input form__input_type_link" id="place-url" name="input-link" 
            placeholder="Ссылка на картинку" required/>
            <span className="form__input-error" id="place-url-error"></span>
        </PopupWithForm>

        <PopupWithForm name='avatar' title='Обновить аватар' buttonName='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
            <input type="url" className="form__input form__input_type_avatar" id="avatar-url" name="input-avatar" 
            placeholder="Ссылка на аватарку" required/>
            <span className="form__input-error" id="avatar-url-error"></span>
        </PopupWithForm>

        <PopupWithForm name='confirm-delete' title='Вы уверены?' buttonName='Да' onClose={closeAllPopups} />

        <ImagePopup onClose={closeAllPopups} isOpen={isImagePopupOpen} card={selectedCard}/>

    </div>    
    </>
  );
}

export default App;
