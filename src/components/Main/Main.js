import React from 'react';
import './main.css';
import Header from './../Header/Header';
import Sidebar from './../Sidebar/Sidebar'
import Content from "../Content/Content";
import {BrowserRouter} from "react-router-dom";

const Main = () => {
    return (
        <BrowserRouter>
            <div className="main">
                <Header/>
                <Sidebar/>
                <Content/>
            </div>
        </BrowserRouter>
    );
};

export default Main;