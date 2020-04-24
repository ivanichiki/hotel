import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Room} from "./Room";
import {fetchExactRoom} from "../../redux/appReducer";


const RoomContainer = ({match})=> {
    const dispatch = useDispatch()
    const rooms = useSelector(state=>state.app.rooms)
    const room = useSelector(state=>state.app.room)
    console.log(match.params.roomId)

    useEffect(()=>{

        if (rooms.length){
            window.scrollTo(0, 0)
           dispatch(fetchExactRoom(match.params.roomId))
        }

    },[rooms])
    if (!room.length) return (<div>Loading...</div>)
    return(<Room room={room[0].fields}/>)
}

export default  RoomContainer;