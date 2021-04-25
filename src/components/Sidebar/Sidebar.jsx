import React from 'react';
import './sidebar.css';
import Categories from "./Categories/Categories";
import {BrowserRouter,Route} from "react-router-dom";


function Sidebar() {
    return (
        <BrowserRouter>
            <div className="sidebar">
                <Categories/>
            </div>
        </BrowserRouter>
    );
}

export default Sidebar;