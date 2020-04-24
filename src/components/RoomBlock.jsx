import React from "react";
import './RoomBlock.scss'
import {NavLink} from "react-router-dom";

export  const RoomBlock = (props)=> {
    return(
        <div className='room_block_wrapper'>
            <div className='img_block'>
                <div className='overlay'></div>

                <div className='btn'>  <NavLink to={`/rooms/${props.name}`}>FEATURED</NavLink></div>
                <img src={props.src} className='img_room'/>

            </div>

            <div className='room-title'>{props.title}</div>
            <div className='price'>$ {props.price}<div>per night</div></div>
        </div>
    )
}