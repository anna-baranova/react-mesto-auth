import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

    const [userName, setUserName] = React.useState('')
    const [userDescription, setUserDescription] = React.useState('')
    const [userAvatar, setUserAvatar] = React.useState('')
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getFullData()
            .then(([userData, cardsData]) => {

                setUserName(userData.name)
                setUserDescription(userData.about)
                setUserAvatar(userData.avatar)
               
                setCards(cardsData)

            })
            .catch(e => console.log(`Ошибка при полуении карточек: ${e}`))
                }, [])

    return(
        <main>
            <section className="profile">
                <img className="profile__image" src={userAvatar} alt="Жак-Ив Кусто" onClick={props.onEditAvatar}/>
                <div className="profile__info">
                    <h1 className="profile__info-title">{userName}</h1>
                    <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                    <p className="profile__info-subtitle">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

            <section className="place-grid">
                <ul className="place-grid__list">
                    {cards.map((card) => (
                    <Card key={card._id} card={card} onCardClick={props.onCardClick} />
                    )
                    )}
                </ul>
            </section>

        </main>
    )
}

export default Main
