import React from 'react';
import c from './category.module.css';
import {NavLink} from "react-router-dom";
import d from "../../../Content/Messanger/Dialog/dialog.module.css";

const Category = (props) => {
    return (
        <li className={c.item}>
            <NavLink activeClassName={c.active} to={props.link}>
                <img
                    src={props.img}
                    alt=""
                    className={c.item_img}
                />
                <span className={c.name}>
                    {props.name}
                </span>
            </NavLink>
        </li>
    )
}

export default Category;