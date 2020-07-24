import React, { useState } from "react";
import "./popover.css";




function Popover(props) {
  
    
  return (      
    <div>
    <div className={props.classes.popoverFon}   onClick={ props.func,
         props.func1
      } ></div>
      <form id='forma' className={props.classes.popover}
      

     
    //   onClick={(()=>{
    //       console.log('проверка')
    //   })}
    >
      
          <button type="button" onClick={ props.func,
         props.func1
      }  >dfdsggg</button>  
          </form>
    </div>
  );
}

export default Popover;
