import React from 'react';
import './my_page.css';
import page from './my_page.module.css';
import Narrow from "./Narrow/Narrow";
import Wide from "./Wide/Wide";

function MyPage() {
    return (
        <div className='page'>
            <Narrow />
            <Wide />
        </div>
    );
}

export default MyPage;