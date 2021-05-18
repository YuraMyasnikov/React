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


function Content(props) {
    console.log("content", props)
    return (
        <div className="content">
            <Route path='/page' render={() => <MyPage
                state={props.state.page}
                despatch={props.despatch}
                subscribe = {props.subscribe}
                />}
            />
            <Route path='/friend' component={Friend}/>
            <Route path='/messanger' render={ () => <Messanger /*state={props.state.messenger}*/ /> }/>
            <Route path='/music' component={Music}/>
            <Route path='/news' component={News}/>
            <Route path='/photo' component={Photo}/>
            <Route path='/video' component={Video}/>
        </div>
    );
}

export default Content;