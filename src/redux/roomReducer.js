import {CHANGE_FILTER_PARAMS, CHANGE_GUEST, FETCH_EXACT_ROOM, FILT_ROOMS, FILT_ROOMS2, SHARE_ROOMS} from "./types";

const initialState = {
    filtredrooms:[],
    guests: 1,
    type:'all',
    price:600,
    minSize:0,
    maxSize:3000,
    breakfast:false,
    pets:false,

    rooms:[]


}

export const roomsReducer = (state=initialState,action)=> {
        switch (action.type) {
            case CHANGE_FILTER_PARAMS:{
                return {...state,[action.fieldName]:action.payload}
            }
            case SHARE_ROOMS: {
                return {...state,rooms:action.payload}
            }
            case FILT_ROOMS: {
                const filtguest = state.rooms.filter(el=>el.fields.capacity>=state.guests)
                let filttype=filtguest
                if (state.type!=='all'){
                    filttype= filtguest.filter(el=>el.fields.name.slice(0,6)===state.type)
                }
                let filtprice = filttype
                filtprice= filttype.filter(el=>el.fields.price<=state.price)
                let filtsize = filtprice
                filtsize=filtprice.filter(el=>el.fields.size>=state.minSize&el.fields.size<=state.maxSize)
                let filtbreakfast = filtsize
                if (state.breakfast) {
                    filtbreakfast = filtsize.filter(el => el.fields.freeBreakfast===true)
                }
                let filtpets = filtbreakfast
                if (state.pets) {
                    filtpets = filtbreakfast.filter(el => el.fields.pets===true)
                }
                return {...state,filtredrooms:filtpets}
            }

        default: return state
    }
}



export  function changeParam(value, name) {
    return{
        type:CHANGE_FILTER_PARAMS,
        payload:value,
        fieldName:name
    }
}



export  function roomFilter(rooms) {
    return{
        type:FILT_ROOMS,
        payload:rooms
    }
}

export  function shareRooms(rooms) {
    return{
        type:SHARE_ROOMS,
        payload:rooms
    }
}