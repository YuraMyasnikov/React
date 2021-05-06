import React from 'react';
import './main.css';
import Header from './../Header/Header';
import Sidebar from './../Sidebar/Sidebar'
import Content from "../Content/Content";
import {BrowserRouter} from "react-router-dom";
import {addStateElement, updatePostText} from "../../redux/state";

const Main = (props) => {
    console.log("main", props);
    return (
        <BrowserRouter>
            <div className="main">
                <Header/>
                <Sidebar/>
                <Content state={props.state} fn1={props.addStateElement} updatePostText={props.updatePostText} />
            </div>
        </BrowserRouter>
    );
};

export default Main;