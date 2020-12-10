import React from 'react';
import style from './Header.module.scss'


const Header = () => {
    return (

            <div className={style.Header}>
                <div className={style.container}>
                    <div className={style.Navbar}>
                        <ul>
                            <li><a href="">Главная</a></li>
                            <li><a href="">Скилы</a></li>
                            <li><a href="">Работы</a></li>
                            <li><a href="">Контакты</a></li>
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default Header;