import React from "react";
import listStartGirrafs from "../../utilits/APIgiffafs";

function MainCard() {
  return Object.values(listStartGirrafs).map((elem) => {
          return(
    <div key={elem.name} className="main-card">
      <p className="main-card__help"> &hellip;</p>
      <div className="main-card__img"></div>
      <p className="main-card__name">{elem.name}</p>
      <div className="main-card__icons">
        <div className="main-card__icon main-card__icon_sex"></div>
        <div className="main-card__icon main-card__icon_libra"></div>
        <div className="main-card__icon main-card__icon_line"></div>
      </div>
      <div className="main-card__icons-texts">
        <div id="sex" className="main-card__icons-text">
          {elem.sex}
        </div>
        <div id="weight" className="main-card__icons-text">
          {elem.weight}
        </div>
        <div id="heght" className="main-card__icons-text">
          {elem.height}
        </div>
      </div>
      <p className="main-card__color" id="color">
        <span className="main-card__color main-card__type  main-card_type_span">
          Цвет:{" "}
        </span>
        {elem.color}
      </p>
      <p className="main-card__dieta" id="dieta">
        <span className="main-card__dieta  main-card__type main-card_type_span">
          Диета:{" "}
        </span>
        {elem.dieta}
      </p>
      <p className="main-card__character" id="character">
        <span className="main-card__character  main-card__type main-card_type_span">
          Харатер:{" "}
        </span>
        {elem.character}
      </p>
    </div>
          )   
  })
}

export default MainCard;
