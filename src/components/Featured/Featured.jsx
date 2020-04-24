import React from "react";
import './Featured.scss'
import {RoomBlock} from "../RoomBlock";

export const Featured = (props)=> {
    return(
        <div className='Feutered_wrapper'>
            <div className='title'>Featured Rooms</div>
            <div style={{width:'80px', marginTop:'15px'}} className='line'></div>
            <div className='featured_container'>
                {props.featuredRooms.map(el=>
                        <RoomBlock name={el.fields.name}  price={el.fields.price} title={el.fields.title} src={el.fields.img.fields.file.url}/>)
                }
            </div>
        </div>
    )
}