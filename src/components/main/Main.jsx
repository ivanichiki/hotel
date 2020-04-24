import React from "react";
import './Main.scss'
import main from '../../svg/main.jpeg'
import {Banner} from "./Banner";
export const Main = ()=> {
    return(
        <div className="Main_wrapper">
            <div className='img'>
                <img src={main}/>
                <Banner path='/rooms' title='Luxurious Rooms' subTitle='Deluxe Rooms Starting At $299' btn='OUR ROOMS'/>
            </div>

        </div>
    )
}