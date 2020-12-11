import React from 'react';
import style from './Footer.module.scss'


const Footer = () => {
    return (
        <div className={style.Footer}>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.title}>Иван Иванов</div>
                    <div className={style.links}>
                        <div className={style.icon}></div>
                        <div className={style.icon}></div>
                        <div className={style.icon}></div>
                        <div className={style.icon}></div>
                    </div>
                    <div className={style.desc}>© 2020 Все права защищены</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;