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
import {updatePostText} from "../../redux/state";


function Content(props) {
    console.log("content", props)
    return (
        <div className="content">
            <Route path='/page' render={ () => <MyPage state={props.state.page} fn2={props.fn1} updatePostText={props.updatePostText} /> }/>
            <Route path='/friend' component={Friend}/>
            <Route path='/messanger' render={ () => <Messanger /> }/>
            <Route path='/music' component={Music}/>
            <Route path='/news' component={News}/>
            <Route path='/photo' component={Photo}/>
            <Route path='/video' component={Video}/>
        </div>
    );
}

export default Content;