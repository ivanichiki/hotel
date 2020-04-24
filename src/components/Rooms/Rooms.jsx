import React from "react";
import './Rooms.scss'
import filter from "../../svg/filter.jpeg";
import {Banner} from "../main/Banner";
import {RoomBlock} from "../RoomBlock";

export const Rooms=(props)=>{


    let changeHandeler = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        props.changeParam(value, e.target.name)
        props.executeFilter()
    }

    return(
        <div className='Filter_wrapper'>
            <div className='img'>
                <img src={filter}/>
                <Banner path='/' title='Our Rooms'  btn='RETURN HOME'/>
            </div>
            <div className='search-title'>Search Rooms</div>
            <div className='line'></div>

              <div className='filters'>

                  <div className='a_filter'>
                      <div className='filter_name'>Room Type</div>

                      <select onChange={changeHandeler} name='type' value={props.filter.type} className='capacity'>
                          <option value='all'> all </option>
                          <option value='family'> family </option>
                          <option value='single'> single </option>
                          <option value='double'> double </option>
                          <option value='triple'> triple </option>

                      </select>
                  </div>


                     <div className='a_filter'>
                         <div className='filter_name'>Guests</div>

                           <select onChange={changeHandeler} name='guests' value={props.filter.guests} className='capacity'>
                               <option value='1'> 1</option>
                               <option value='2'> 2 </option>
                               <option value='3'> 3 </option>
                               <option value='4'> 4 </option>
                               <option value='5'> 5 </option>
                               <option value='6'> 6 </option>
                          </select>
                     </div>

                  <div className='a_filter'>
                      <div className='filter_name'>Rooms Price ${props.filter.price}</div>

                    <input onChange={changeHandeler} value={props.filter.price} name='price' type="range" min="0" max="600"/>
                  </div>

                  <div className='a_filter'>
                      <div className='filter_name'>Room Size</div>
                        <div>
                            <input onChange={changeHandeler} name='minSize' value={props.filter.minSize} className='minmax' type="number" />
                            <input onChange={changeHandeler} name='maxSize' value={props.filter.maxSize} className='minmax' type="number" />
                        </div>
                  </div>

                  <div className='a_filter'>
                      <div className='check'>
                        <input onChange={changeHandeler} checked={props.filter.breakfast} name="breakfast" type='checkbox' />
                        Breakfast
                      </div>

                      <div className='check'>
                         <input onChange={changeHandeler} checked={props.filter.pets} name="breakfast" name="pets" type='checkbox' />
                          Pets
                      </div>
                  </div>
                   </div>

            {props.filtredrooms.length?
                <div className='filters_result'>
                    {props.filtredrooms.map(el=>
                        <RoomBlock name={el.fields.name}  price={el.fields.price} title={el.fields.title} src={el.fields.img.fields.file.url}/>)
                    }
                </div>
                :
                <div className='notFound'>Unfortunately No Rooms Matched Your Search Parameters</div>
            }

        </div>
    )
}