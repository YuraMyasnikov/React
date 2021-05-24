import React from 'react';

import './content.css'
import MyPage    from "./MyPage/MyPage";
import Friend    from "./Friend/Friend";
import Messanger from "./Messanger/Messanger";
import Music     from "./Music/Music";
import News      from "./News/News";
import Photo     from "./Photo/Photo";
import Video     from "./Video/Video";
import {Route}   from "react-router-dom";
import MessangerContainer from "./Messanger/MessangerContainer";


function Content(props) {
    console.log("content", props)
    return (
        <div className="content">
            <Route path='/page' render={() => <MyPage
                state={props.state.page}
                dispatch={props.dispatch}
                />}
            />
            <Route path='/friend' component={Friend}/>
            <Route path='/messanger' render={ () => <MessangerContainer
                state={props.state.messenger}
                dispatch={props.dispatch} /> }/>
            <Route path='/music' component={Music}/>
            <Route path='/news' component={News}/>
            <Route path='/photo' component={Photo}/>
            <Route path='/video' component={Video}/>
        </div>
    );
}

export default Content;