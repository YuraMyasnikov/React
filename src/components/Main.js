import React from 'react';
import './../style/main.css';
import Header from "./Header";
import Nav from "./Nav";
import Profile from "./Profile";


const Main = () => {
    return (
        <div className="main">
            <Header />
            <Nav />
            <Profile />
        </div>
    );
};

export default Main;