//возвращаем массив данных по новому жирафу

import nullimage from'../vendor/images/photo_create.png';
import Sabmit from './Sabmit';


import React from 'react';

function CreateGirraf(classes) {
   
        return (
                <form className={classes.classes} >
          
                        <p className="main-card__help">	&hellip;</p>
                        <img  src={nullimage}className="main-card__img main-card__img_create" />
                        <input type="text" className="main-card__input main-card__input_name"
                                placeholder="Введите имя"></input>
                        <div className="main-card__icons">
                                <div className="main-card__icon main-card__icon_sex"></div>
                                <div className="main-card__icon main-card__icon_libra"></div>
                                <div className="main-card__icon main-card__icon_line"></div>
                        </div>
                        <div className="main-card__icons-texts">
                                <input id="sex" placeholder="---" className="main-card__input main-card__input_sex" />
                                <input id="weight" placeholder="---" className="main-card__input main-card__input_weight"></input>
                                <input id="heght" placeholder="---" className="main-card__input main-card__input_height"></input>
                        </div>
                        <div className="main-card__value-box">
                                <span className="main-card__color main-card__type main-card_type_span">Цвет:&nbsp; </span>
                                <input className="main-card__input main-card__input_color" id="color"></input>
                        </div>

                        <div className="main-card__value-box">
                                <span className="main-card__dieta main-card__type main-card_type_span">Диета:&nbsp; </span>
                                <input className="main-card__input main-card__input_dieta" id="dieta"></input>
                        </div>

                        <div className="main-card__value-box">
                                <span className="main-card__character main-card__type main-card_type_span">Харатер:&nbsp; </span>
                                <input className="main-card__input main-card__input_character" id="character"></input>
                        </div>
                        <button type="sabmit" className="main-card__submit" >Сохранить</button>
                      {/* {list.push(document.getElementById('character').value)} */}
                </form>
        )
}

export default CreateGirraf;