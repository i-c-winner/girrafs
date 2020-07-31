import React, { useState } from "react";
import "./main.css";
import MainCard from "../main-card/MainCard";
import MainHeader from "../main-header/MainHeader";
import "../main-title/main-title.css";
import CreateGirraf from "../../utilits/CreateGirraf";
import Volume from "../volume/Volume";
const startListGirrafs = JSON.parse(localStorage.getItem("girrafs"));
let volume = null;
if (localStorage.getItem("girrafs")) {
  volume = JSON.parse(localStorage.getItem("girrafs")).length;
} else {
  volume = 0;
}

function Main() {
  let [classes, setClasses] = useState("main-card__create_disabled");
  let [listGirrafs, setListGirrafs] = useState(startListGirrafs);
  let [vol, setVol] = useState(volume);
  return (
    <div className="main">
      <MainHeader />
      <div className="main-title">
        <p className="main-title__name">Жирафы</p>
        <div
          className="main-title__plus"

          onClick={() =>
            setClasses(() => {
              return "main-card main-card__create";
            })
          }
        ></div>
      </div>
      <div className="main-cards">
        <CreateGirraf
          classes={classes}
          funcRenderVolume={(list) => {
            setVol(() => {
              return list;
            });
          }}
          funcRender={(list) => {
            setListGirrafs(() => {           
              return list;
            });
          }}
          func={(closed) => {
            setClasses(() => {
               
              return closed;
            });
          }}
        />
        <MainCard listGirrafs={listGirrafs} />
      </div>
      <Volume volume={vol} />
    </div>
  );
}
export default Main;
