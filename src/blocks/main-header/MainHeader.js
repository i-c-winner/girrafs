import React from 'react';
import './main-header.css';
import mainHeaderMenu from '../../utilits/main-headerMenu'

class MainHeader extends React.Component {
    constructor(props) {
        super (props);
        this.props=props
    }

    render () {
        
        return (
            <div className='main-header'>
                <div className='main-header__menu'>
                    {Object.values(mainHeaderMenu).map((element)=> {
                        return <p key={element} className="main-header__menu-item main-header__menu-item_activ">
                            {element}
                        </p>
                    })}
                    <div className="main-header__menu_plus"></div>
                </div>
                <div className='main-header__contacts'>
                   <div className="main-header__bell" />
                   <div className="main-header__horse" />
                   <a className="main-header__email" href = "mailto: abc@example.com">hello@giraffe.com</a>
                </div>
            </div>
        )
    }
}

export default MainHeader;