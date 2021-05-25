import {combineReducers, createStore} from "redux";
import PageReducer from "./page-reducer";
import MessengerReducer from "./messanger-reducer";

let reducers = combineReducers({
    page: PageReducer,
    messenger: MessengerReducer
})

let store = createStore(reducers);

window.store = store;

export default store