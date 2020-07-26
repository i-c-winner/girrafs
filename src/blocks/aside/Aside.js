import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "./aside.css";
import asideImage from "../../vendor/images/ziraf_logo.png";
import asideList from "../../utilits/asidelist";
import Horses from "../horses/Horses";
import Main from "../main/Main";
let idMarkerStart = "";
const colorActiv = ["#ffffff", "#567354", "#435F40"];
const colorPassiv = ["#567354", "#F3DBC7", "#F3DBC7"];
let colors = colorPassiv;

function Aside() {
  let [idMarker, setIdMarker] = useState(idMarkerStart);
  return (
    <div className="row">
         <Router>
      <div className="aside">
        <div className="aside__header">
          <img className="aside__img" src={asideImage} alt="Лого" />
          <div className="aside__title-texts">
            <h1 className="aside__title">Ферма заслуженных жирафов</h1>
            <p className="aside__subtitle">России и СНГ</p>
          </div>
        </div>
       
          <ul className="aside__body">
            {Object.values(asideList).map((elem) => {
              {
                if (idMarker === elem[0]) {
                  colors = colorActiv;
                } else {
                  colors = colorPassiv;
                }
              }
              return (
                <Link to={elem[2]}
                  className="aside__item-box"
                  key={elem[0]}
                  onClick={() => {
                    setIdMarker(() => {
                      return elem[0];
                    });
                  }}
                  style={{ backgroundColor: colors[0], color: colors[1] }}
                >
                  <svg
                    style={{ color: colors[2] }}
                    className="aside__icon"
                    width="30"
                    height="28"
                    viewBox="0 0 30 28"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={elem[1]} />{" "}
                  </svg>
                  {console.log(elem[2])}

                  <p className="label__text">
                    {elem[0]} </p>
                  </Link>           
              );
            })}
          </ul>
        
      </div>
        <Switch>
               
            <Route exact path='/home' component ={Main}></Route>         
            <Route exact path="/manage" component={Horses}></Route>
            <Route exact path="/people" component={Horses}></Route>
            <Route exact path="/settings" component={Horses}></Route>
            <Route exact path="/tools" component={Horses}></Route>        
            <Route exact path="/horse" component={Horses}></Route>
              <Route  component ={Main}></Route>    
          </Switch>          
        </Router>     
    </div>
  );
}

export default Aside;
