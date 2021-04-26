import React from 'react';
import './sidebar.css';
import Categories from "./Categories/Categories";

function Sidebar() {
    return (
        <div className="sidebar">
            <Categories/>
        </div>
    );
}

export default Sidebar;