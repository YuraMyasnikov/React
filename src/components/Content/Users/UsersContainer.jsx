import React from 'react';
import u from './users.module.css';
import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, unfollowActionCreator} from "../../../redux/users-reducer";


let mapStateToProps =(state) => {
    return{
        users: state.usersPage.users
    }
}

let mapDispatchToProps =(dispatch) => {
    return{
        follow: (id) => {
            dispatch( followActionCreator(id) )
        },
        unfollow: (id) => {
            dispatch( unfollowActionCreator(id) )
        }

    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;