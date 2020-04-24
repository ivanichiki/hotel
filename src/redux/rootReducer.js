import {combineReducers} from "redux";
import {appReducer} from "./appReducer";
import {roomsReducer} from "./roomReducer";
import {CHANGE_GUEST, FILT_ROOMS} from "./types";


export const RootReducer = combineReducers({
    app:appReducer,
    filter:roomsReducer
})

