import React, { useState } from 'react';
import './aside.css'
import asideImage from '../../vendor/images/ziraf_logo.png';
import asideList from '../../utilits/asidelist';
let idMarkerStart = ''
const colorActiv = ['#ffffff', '#567354', '#435F40']
const colorPassiv = ['#567354', '#F3DBC7', '#F3DBC7']
let colors = colorPassiv;


function Aside() {
    let [idMarker, setIdMarker] = useState(idMarkerStart);
    return (
        <div className="aside">
            <div className="aside__header">
                <img className="aside__img" src={asideImage} />
                <div className="aside__title-texts">
                    <h1 className="aside__title">
                        Ферма заслуженных жирафов
                    </h1>
                    <p className="aside__subtitle">
                        России и СНГ
                    </p>
                </div>
            </div>
            <ul className="aside__body">
                      {
                    Object.values(asideList).map((elem) => {
                        {
                            if (idMarker === elem[0]) {
                                colors = colorActiv
                            } else {
                                colors = colorPassiv
                            }
                        }
                        return (
                            <li className="aside__item-box" key={elem[0]}
                                onClick={() => {
                                    setIdMarker(() => {
                                        return elem[0]
                                    })
                                }}
                                style={{ backgroundColor: colors[0], color: colors[1] }}   >
                                <svg style={{color: colors[2]}} className="aside__icon" width="30" height="28"
                                    viewBox="0 0 30 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d={elem[1]} /> </svg>
                                <p className="label__text">{elem[0]}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Aside;