import React from 'react';
import './my_page.css';
import page from './my_page.module.css';
import Narrow from "./Narrow/Narrow";
import Wide from "./Wide/Wide";

function MyPage(props) {

    console.log('my_page',props);
    return (
        <div className='page'>
            <Narrow />
            <Wide state={props.state.wide} fn3={props.fn2} updatePostText={props.updatePostText} />
        </div>
    );
}

export default MyPage;