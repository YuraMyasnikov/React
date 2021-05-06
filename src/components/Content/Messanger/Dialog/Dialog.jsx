import React from 'react';
import d from './dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    console.log('dialog',props)
    return (
        <div className={d.dialog}>
            <div className={d.item}>
                <img className={d.img} src={props.img} alt="ava"/>
                <NavLink activeClassName={d.active} to={"/messanger/" + props.id} > {props.name} </NavLink>
            </div>

        </div>
    );
}

export default Dialog;