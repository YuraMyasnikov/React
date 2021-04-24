import React from 'react';
import category from './category.module.css'

function Category(props) {
    return (
        <li className={category.item}>
            <a href="#">
                <img
                    src={props.img}
                    alt=""
                    className={category.item_img}
                />
                <span className={category.name}>
                    {props.name}
                </span>
            </a>
        </li>
    )
}

export default Category;