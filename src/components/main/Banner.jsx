import React from "react";
import {NavLink} from "react-router-dom";
import './Banner.scss'
export const Banner = (props)=> {


    return (

         <div className='banner-wrapper'>
                 <div className='banner'>
                      <div className='title'>{props.title}</div>
                       <div className='line'></div>
                       <div className='sub_title'>{props.subTitle} </div>
                       <div className='btn'><NavLink to={props.path}>{props.btn}</NavLink></div>
                  </div>
         </div>
    )
}
