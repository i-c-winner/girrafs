import React, { useState } from "react";
import "./main-card.css";
import "../main-cards/main-cards.css";
import listStartGirrafs from "../../utilits/APIgirrafs.js";
import Popover from "../popover/Popover";
let popoverOpen = {
  popover: "popover popover_state_enabled",
  popoverFon: "popover__fon_enabled popover__fon",
};
let popoverClosed = {
  popover: "popover_state_disabled",
  popoverFon: "popover__fon_disabled popover__fon",
};


let isOpenMarker = null;


   function MainCard (props) {
    let [classes, setClasses] = useState("popover_state_disabled");
    let [isIdMarker, setIsIdMarker] = useState("");  

    return ((props.listGirrafs||[]).map((elem) => {  
          if (isIdMarker === elem.valuesName.values) {
        isOpenMarker = popoverOpen;
      } else {
        isOpenMarker = popoverClosed;
      }
      return (
        <div key={elem.valuesName.values} className="main-card">
          <p
            className="main-card__help"
            onClick={(event) => {
              setIsIdMarker(() => {
                return elem.valuesName.name;
              });
              setClasses(() => {
                return isOpenMarker;
              });
            }}
          >
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

          <img src="https://res.cloudinary.com/dhbdvadmd/image/upload/v1595408534/girrafs/girraf_1_kc2dag.png" className="main-card__img" />

          <p className="main-card__name"> {elem.valuesName.values}</p>

          <div className="main-card__icons">
            <div className="main-card__icon main-card__icon_sex"></div>
            <div className="main-card__icon main-card__icon_libra"></div>
            <div className="main-card__icon main-card__icon_line"></div>
          </div>

          <div className="main-card__icons-texts">
            <div id="sex" className="main-card__icons-text">
              {elem.valuesSex.values}
            </div>

            <div id="weight" className="main-card__icons-text">
              {elem.valuesWeight.values}
            </div>
            <div id="heght" className="main-card__icons-text">
              {elem.valuesHeight.values}
            </div>
          </div>

          <p className="main-card__color" id="color">
            <span className="main-card__color main-card__type  main-card_type_span">
              Цвет:
            </span>
            &nbsp;{elem.valuesColor.values} &nbsp;
          </p>
          <p className="main-card__dieta" id="dieta">
            <span className="main-card__dieta  main-card__type main-card_type_span">
              Диета:
            </span>
            &nbsp;{elem.valuesDieta.values}
          </p>
          <p className="main-card__character" id="character">
            <span className="main-card__character  main-card__type main-card_type_span">
              Харатер:
            </span>
            &nbsp;{elem.valuesCharacter.values}
          </p>
        </div>
      );
    }));
  };


export default MainCard;
