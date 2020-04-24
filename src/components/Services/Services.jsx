import React from "react";
import './Services.scss'
import { FaCocktail } from 'react-icons/fa';
import {FaHiking} from "react-icons/fa";
import {FaBeer, FaShuttleVan} from "react-icons/all";

const Block = ({Src,name})=> {
    return(
        <div className='service_block'>
           <div className='svg'>
            <Src/>
           </div>
            <div className='name'>{name}</div>
            <div className='subName'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!</div>
        </div>
    )
}


export const Services = ()=> {
    return(
        <div className='Services_wrapper'>
            <div className='Services'>
                <div className='title'>
                    Services
                </div>
                <div className='line'></div>
                <div className='block_container'>
                    <Block name='Free Cocktails' Src={FaCocktail}/>
                    <Block name='Endless Hiking' Src={FaHiking}/>
                    <Block name='Free Shuttle' Src={FaShuttleVan}/>
                    <Block name='Strongest Beer' Src={FaBeer}/>

                </div>
            </div>
        </div>
    )
}
