import React from "react";
import './Header.scss'
import logo from '../../svg/logo.svg'
import {NavLink} from "react-router-dom";
export const Header=()=> {
    return(
        <div className='Header_wrapper'>
            <div className='header'>
                <div className='logo'><NavLink to='/'><img src={logo}/></NavLink></div>
            </div>
        </div>
    )
}
