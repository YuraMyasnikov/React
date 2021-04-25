import React from 'react';

import './content.css'
import MyPage from "./MyPage/MyPage";
import Friend from "./Friend/Friend";
import Messages from "./Messages/Messages";
import Music from "./Music/Music";
import News from "./News/News";
import Photo from "./Photo/Photo";
import Video from "./Video/Video";
import {BrowserRouter, Route} from "react-router-dom";


function Content() {
    return (
        <BrowserRouter>
            <div className="content">
                123
               <Route path='/page' component={MyPage} />
               <Route path='/friend' component={Friend} />
               <Route path='/messages' component={Messages} />
               <Route path='/music' component={Music} />
               <Route path='/news' component={News} />
               <Route path='/photo' component={Photo} />
               <Route path='/video' component={Video} />
            </div>
        </BrowserRouter>
    );
}

export default Content;