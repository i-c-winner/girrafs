import React, { useState } from "react";
import "./main-card.css";
import "../main-cards/main-cards.css";
import listStartGirrafs from "../../utilits/APIgirrafs.js";
import Popover from "../popover/Popover";
let popoverOpen = {'popover':"popover popover_state_enabled", 
'popoverFon':"popover__fon_enabled popover__fon"};
let popoverClosed ={'popover': "popover_state_disabled", 
'popoverFon':"popover__fon_disabled popover__fon"};

let isOpenMarker = null;

function MainCard() {
  let [classes, setClasses] = useState("popover_state_disabled");
  let [isIdMarker, setIsIdMarker] = useState("");

  return Object.values(listStartGirrafs).map((elem) => {
    if (isIdMarker === elem.name) {
      isOpenMarker = popoverOpen;
    } else {
      isOpenMarker = popoverClosed;
    }
    return (
      <div key={elem.name} className="main-card">
        <p
          
          className="main-card__help"
          onClick={(event) => {
            setIsIdMarker(() => {
              return elem.name;
            });
            setClasses(() => {
              return isOpenMarker;
            });
          }}
        >
          {" "}
          &hellip;
        </p>

        <Popover
        func1={() => {
          setIsIdMarker(() => {
            return "";
          });
        }}
          func={() => {
            setClasses(() => {
            return "popover_state_disabled";
            });
          }}
          classes={isOpenMarker}
  

        />
        <img src={elem.img} className="main-card__img" />
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
    );
  });
}

export default MainCard;
