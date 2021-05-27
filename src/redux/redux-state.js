import {combineReducers, createStore} from "redux";
import PageReducer from "./page-reducer";
import MessengerReducer from "./messanger-reducer";
import UsersReducer from "./users-reducer";

let reducers = combineReducers({
    page: PageReducer,
    messenger: MessengerReducer,
    usersPage: UsersReducer
})

let store = createStore(reducers);

window.store = store;

export default store