import React, { useState, useEffect} from 'react';
import './volume.css'
import parcent from '../../utilits/parcent'
import listStartGirrafs from '../../utilits/APIgirrafs';
let volume=null
if (localStorage.getItem('girrafs')) {
   volume=((JSON.parse(localStorage.getItem('girrafs')).length)) 
}  else { volume=0}




function Volume (props){

    return (
        
    <div className="volume">
        <div className="volume__close"></div>
        <p className="volume__percent">{parcent(props.volume)}</p>
        <p className="volume__text volume__text_text">заполнение вольера</p>
        <div className="volume__volume">
            <div className="volume__volume-fon">
                <div className="volume__scale" style={{width:(((props.volume)/4)*100)+"%"}}></div>
            </div>
            <div className=" volume__text volume__text_info"></div>
        </div>
    </div>
    )
}

export default Volume;