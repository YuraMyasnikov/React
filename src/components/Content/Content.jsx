import React from 'react';

import './content.css'
import MyPage    from "./MyPage/MyPage";
import Friend    from "./Friend/Friend";
import News      from "./News/News";
import {Route}   from "react-router-dom";
import MessangerContainer from "./Messanger/MessangerContainer";
import UsersContainer from "./Users/UsersContainer";


function Content(props) {
    console.log("content", props)
    return (
        <div className="content">
            <Route path='/page' render={() => <MyPage />} />
            <Route path='/friend' component={Friend}/>
            <Route path='/messanger' render={ () => <MessangerContainer /> }/>
            <Route path='/users' render={ () => <UsersContainer /> }/>
            <Route path='/news' component={News}/>
        </div>
    );
}

export default Content;