import React from 'react';
import Category from "./Category/Category";
import './categories.css';
import c from './categories.module.css';


function Categories() {
    return (
        <div className="categories">
            <ul className="categories__list">
                <Category name="Гланая" link="/page"/>
                <Category name="Сообщения" link="/messanger"/>
                <Category name="Пользователи" link="/users"/>
                <Category name="Новости" link="/news"/>
                <Category name="Друзья" link="/friend"/>
            </ul>
        </div>
    );
}

export default Categories;