import {wishReducer} from "./action_reducer/wish.reducer"

import {combineReducers} from "redux"

let RootReducers = combineReducers({ReducerMessage : wishReducer})

export {RootReducers};