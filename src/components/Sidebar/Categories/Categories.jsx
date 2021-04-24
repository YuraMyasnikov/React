import React from 'react';
import Category from "./Category/Category";

function Categories() {
    return (
        <div className="categories">
            <ul className="categories__list">
                <Category name="Гланая"/>
                <Category name="Новости"/>
                <Category name="Друзья"/>
                <Category name="Сообщения"/>
                <Category name="Фото"/>
                <Category name="Музыка"/>
                <Category name="Видео"/>
                <Category name="Сообщества"/>
            </ul>
        </div>
    );
}

export default Categories;