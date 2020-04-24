import {FETCH_EXACT_ROOM, FETCH_FEATURED_ROOMS, FETCH_ROOMS, FILT_ROOMS} from "./types";
import {client} from "../client";
import {shareRooms} from "./roomReducer";

const initialState = {
    rooms:[],
    featuredRooms:[],
    room:{},
    filtredrooms:[]
}
export const appReducer = (state=initialState,action)=> {
    switch (action.type) {
        case FETCH_ROOMS:
            return {...state,rooms: action.payload}
        case FETCH_FEATURED_ROOMS:
            return {...state,featuredRooms: action.payload}
        case FETCH_EXACT_ROOM:
            return {...state, room: state.rooms.filter(el=>el.fields.name===action.payload)}

        default: return state
    }

}


export function fetchRooms() {
    return async dispatch=> {
        const entries = await client.getEntries({
            content_type: "hotel"
        })
        const sordet_items=entries.items.sort((a,b)=>b.fields.price-a.fields.price)
        dispatch({type: FETCH_ROOMS, payload:sordet_items})
       dispatch(fetchFeaturedRooms(sordet_items))
        dispatch(shareRooms(sordet_items))
    }

}


export  function fetchFeaturedRooms(rooms) {
    return dispatch=>{
        dispatch({
            type:FETCH_FEATURED_ROOMS,
            payload:rooms.filter(el=>el.fields.featured===true)
        })
    }
}


export  function fetchExactRoom(name) {
    return{
        type:FETCH_EXACT_ROOM,
        payload:name
    }

}

