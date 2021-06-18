import React from "react";

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
      }

      return(
        <li className="place-grid__list-item">
            <img className="place-grid__item"  src={props.card.link} alt={props.card.name} onClick={handleClick}/>
            <button type="button" className="place-grid__delete place-grid__delete_hidden"></button>
            <div className="place-grid__title-container">
                <h2 className="place-grid__title">{props.card.name}</h2>
                <div className="place-grid__like">
                    <button type="button" className="place-grid__like-btn"></button>
                    <span className="place-grid__like-count">{props.card.likes.length}</span>
                </div>
            </div>    
        </li>
      )
}

export default Card