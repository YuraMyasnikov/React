import React from 'react';
import './my_page.css';
import page from './my_page.module.css';
import Narrow from "./Narrow/Narrow";
import Wide from "./Wide/Wide";
import Content from "../Content";


function MyPage(props) {

    console.log('page',props);
    return (
        <div className='page'>
            <Narrow />
            <Wide
                state={props.state.wide}
                despatch={props.despatch}
                subscribe = {props.subscribe}
            />
        </div>
    );
}

export default MyPage;