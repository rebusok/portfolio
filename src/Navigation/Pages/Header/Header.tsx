import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Header.module.scss'
import {PATH} from "../../Routes/Routes";


const Header = () => {
    return (

        <div className={style.Header}>
            <div className={style.container}>
                <div className={style.Navbar}>
                    <ul>
                        <li><NavLink
                            to={PATH.MAIN}
                            activeClassName={style.active}
                        >Main</NavLink></li>
                        <li><NavLink
                            to={'/skills'}
                            activeClassName={style.active}
                        >Skills</NavLink></li>
                        <li><NavLink
                            to={'/project'}
                            activeClassName={style.active}
                        >Project</NavLink></li>
                        <li><NavLink
                            to={'/contacts'}
                            activeClassName={style.active}
                        >Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;