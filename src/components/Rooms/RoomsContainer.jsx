import React, {useEffect, useState} from "react";
import {Rooms} from "./Rooms";
import {connect} from "react-redux";
import {changeParam, roomFilter} from "../../redux/roomReducer";


const RoomsContainer = (props)=> {

    useEffect(()=> {
        if(props.rooms.length) {
            window.scrollTo(0, 0)
            props.roomFilter()
        }
    },[props.rooms])

    return<Rooms executeFilter={props.roomFilter} changeParam={props.changeParam} filtredrooms={props.filter.filtredrooms} filter={props.filter}/>
}
const mapDispatchToProps =  {
    changeParam,
    roomFilter,
};
const mapStateToProps = state =>{
    return {
        filter:state.filter,
        rooms: state.app.rooms
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(RoomsContainer);