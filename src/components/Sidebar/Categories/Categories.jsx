import React from 'react';
import Category from "./Category/Category";
import './categories.css';
import c from './categories.module.css';


function Categories() {
    return (
        <div className="categories">
            <ul className="categories__list">
                <Category name="Гланая" link="/page"/>
                <Category name="Новости" link="/news"/>
                <Category name="Друзья" link="/friend"/>
                <Category name="Сообщения" link="/messages"/>
                <Category name="Фото" link="/photo"/>
                <Category name="Музыка" link="/music"/>
                <Category name="Видео" link="/video"/>
            </ul>
        </div>
    );
}

export default Categories;