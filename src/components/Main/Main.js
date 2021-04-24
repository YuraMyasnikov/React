import React from 'react';
import './main.css';
import Header from './../Header/Header';
import Sidebar from './../Sidebar/Sidebar'
import Content from "../Content/Content";

const Main = () => {
    return (
        <div className="main">
            <Header />
            <Sidebar />
            <Content />
        </div>
    );
};

export default Main;