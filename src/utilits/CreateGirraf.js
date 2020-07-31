//возвращаем массив данных по новому жирафу

import nullimage from "../vendor/images/photo_create.png";
import React, { useState } from "react";
import "../blocks/main-card/main-card.css";
import apiCreateGirraf from '../utilits/apiCreateGirraf';
import createButton from '../utilits/createButton';



function CreateGirraf(props) {

  let [valuesWeight, setValuesWeight]= useState('')
  let [valuesHeight, setValuesHeight]= useState('')
  let [valuesSex, setValuesSex]= useState('')
  let [valuesColor, setValuesColor]= useState('')
  let [valuesDieta, setValuesDieta]= useState('')
  let [valuesCharacter, setValuesCharacter]= useState('')
  let [valuesName, setValuesName]= useState('')
let values={valuesSex, valuesName, valuesWeight, valuesHeight,
  valuesColor,  valuesDieta, valuesCharacter }

  return (    
    <form onSubmit={(event)=>{
      createButton(event, values);
     props.func()
      
    }
    }
      className={props.classes} 
    >
      <p className="main-card__help"> &hellip; </p>
      <img
        src={nullimage}
        className="main-card__img main-card__img_create"
        alt="аватара"
      />
      <input
    id='name'
      onChange={(event)=>{
        setValuesName(apiCreateGirraf(event, valuesName))}        
    }
        type="text"
        className="main-card__input main-card__input_name"
        placeholder="Введите имя"
      ></input>
      <div className="main-card__icons">
        <div className="main-card__icon main-card__icon_sex"> </div>{" "}
        <div className="main-card__icon main-card__icon_libra"> </div>{" "}
        <div className="main-card__icon main-card__icon_line"> </div>{" "}
      </div>
      <div className="main-card__icons-texts">
        <input
        onChange={(event)=>{
          setValuesSex(apiCreateGirraf(event, valuesSex))}        
      }
          id="sex"
          placeholder="---"
          className="main-card__input main-card__input_sex"
        />
        <input
          id="weight"
           onChange={(event)=>{
        setValuesWeight(apiCreateGirraf(event, valuesWeight))}        
    }
          placeholder="---"
          className="main-card__input main-card__input_weight"
        ></input>
        <input
          id="heght"
          onChange={(event)=>{
            setValuesHeight(apiCreateGirraf(event, valuesHeight))}        
        }
          placeholder="---"
          className="main-card__input main-card__input_height"
        ></input>
      </div>
      <div className="main-card__value-box">
        <span className="main-card__color main-card__type main-card_type_span">   
          Цвет:&nbsp;
        </span>
        <input
         onChange={(event)=>{
          setValuesColor(apiCreateGirraf(event, valuesColor))}        
      }
          className="main-card__input main-card__input_color"
          id="color"
        ></input>
      </div>
      <div className="main-card__value-box">
        <span className="main-card__dieta main-card__type main-card_type_span">        
          Диета:&nbsp;
        </span>
        <input
         onChange={(event)=>{
          setValuesDieta(apiCreateGirraf(event, valuesDieta))}        
      }
          className="main-card__input main-card__input_dieta"
          id="dieta"
        ></input>
      </div>
      <div className="main-card__value-box">
        <span className="main-card__character main-card__type main-card_type_span">
               Характер:&nbsp;
        </span>
        <input
         onChange={(event)=>{
          setValuesCharacter(apiCreateGirraf(event, valuesCharacter))}        
      }
          className="main-card__input main-card__input_character"
          id="character"
        ></input>
      </div>
      <button type="submit" className="main-card__submit">      
        Сохранить
      </button>
    </form>
  );
}




export default CreateGirraf;
