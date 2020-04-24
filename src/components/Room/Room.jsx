import React from "react";
import details1 from '../../svg/details1.jpeg'
import details2 from '../../svg/details2.jpeg'
import details3 from '../../svg/details3.jpeg'
import './Room.scss'
import {Banner} from "../main/Banner";
export const Room=({room})=> {
console.log(room)

    return(
        <div className='room_wrapper'>
            <div className='img'>
                <img  src={room.img.fields.file.url}/>

                   <Banner path='/rooms' title={`${room.title} Room`}  btn='BACK TO ROOMS'/>
            </div>
            <div className='room_content'>
                 <div className='pic_wrapper'>
                     <div className='pic'> <img src={details1}/></div>
                     <div className='pic'> <img src={details2}/></div>
                     <div className='pic'> <img src={details3}/></div>
                 </div>
                <div className='detailsAndInfo'>
                    <div className='Details'>
                        <h3>Details</h3>
                        <p>Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.</p>
                    </div>
                    <div className='info'>
                        <h3>Info</h3>
                        <p>Price : ${room.price}</p>
                        <p>Size : ${room.size} SQFT</p>
                        <p>Max Capacity : {room.capacity} People</p>
                        <p>{room.pets? 'Pets Allowed': 'No Pets Allowed'}</p>
                        {room.freeBreakfast&&<p>Free Breakfast Included</p>}
                    </div>

                </div>
              <div className='ex-title'> Extrass  </div>
                <div className='extras'>

                    <div>
                        <p>- Plush pillows and breathable bed linens</p>
                        <p>- Complimentary refreshments</p>
                        <p>- Comfortable beds</p>
                    </div>
                    <div>
                        <p>- Soft, oversized bath towels</p>
                        <p>- Adequate safety/security</p>

                    </div>
                    <div>
                        <p>- Full-sized, pH-balanced toiletries </p>
                        <p>- Internet </p>
                    </div>
                </div>
              </div>

        </div>
    )
}