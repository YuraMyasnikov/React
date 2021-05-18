import React from 'react';
import './main.css';
import Header from './../Header/Header';
import Sidebar from './../Sidebar/Sidebar'
import Content from "../Content/Content";
import {BrowserRouter} from "react-router-dom";


const Main = (props) => {
    console.log("main", props)
    return (
        <BrowserRouter>
            <div className="main">
                <Header/>
                <Sidebar/>
                <Content
                    state={props.store.getState()}
                    despatch={props.store.despatch.bind(props.store)}
                    subscribe = {props.store.getSubscribe}
                />
            </div>
        </BrowserRouter>
    );
};

export default Main;