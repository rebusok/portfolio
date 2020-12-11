import React from 'react';
import {  NavLink } from 'react-router-dom';
import style from './Header.module.scss'
import {PATH} from "../../Navigation/Routes/Routes";


const Header = () => {
    return (

        <div className={style.Header}>
            <div className={style.container}>
                <div className={style.Navbar}>
                    <ul>
                        <li><NavLink
                            to={PATH.MAIN}
                            activeClassName={style.active}
                        >Главная</NavLink></li>
                        <li><NavLink
                            to={'/skills'}
                            activeClassName={style.active}
                        >Скилы</NavLink></li>
                        <li><NavLink
                            to={'/jobs'}
                            activeClassName={style.active}
                        >Работы</NavLink></li>
                        <li><NavLink
                            to={'/contacts'}
                            activeClassName={style.active}
                        >Контакты</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;