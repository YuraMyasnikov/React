import React from 'react';

const Nav = () => {
    return (
        <nav className="sidebar">
            <ul className="list">
                <li className="list__item">
                    <a href="#" className="list__item__link">
                        Profile
                    </a>
                </li>
                <li className="list__item">
                    <a href="#" className="list__item__link">
                        Messeges
                    </a>
                </li>
                <li className="list__item">
                    <a href="#" className="list__item__link">
                        News
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;