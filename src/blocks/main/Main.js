import React, { useState } from 'react';
import './main.css';
import MainCard from '../main-card/MainCard';
import MainHeader from '../main-header/MainHeader';
import '../main-title/main-title.css';
import CreateGirraf from '../../utilits/CreateGirraf';



function Main() { 
    
       let [classes, setClasses]=useState('main-card__create_disabled');
    return (
        <div className='main' >
            <div className="main-title">
                <p className="main-title__name">Жирафы</p>
                <div className="main-title__plus" onClick={()=>
              setClasses(()=> { return 'main-card main-card__create'})
                }>

                </div> 
            </div>
            
            <MainHeader />
            <div className='main-cards'>
                <CreateGirraf classes={classes} />
<MainCard />
</div>
</div>
    )
}
export default Main;