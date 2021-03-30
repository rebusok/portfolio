import React from 'react';
import style from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={style.Footer}>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.title}>Грушкин Юрий</div>
                    <div className={style.links}>
                        <div className={style.icon}>
                            <a href="https://www.linkedin.com/in/yuriy-grushkin-a84bb6206/">
                                <img src={require('../../../assets/svg/linkedin.svg').default} alt=""/>
                            </a>
                        </div>
                        <div className={style.icon}>
                            <a href="https://www.codewars.com/users/Rebusok">
                                <img src={require('../../../assets/svg/promo.svg').default} alt=""/>

                            </a>
                        </div>
                        <div className={style.icon}>
                            <a href="https://github.com/rebusok">
                                <img style={{backgroundColor: 'black'}} src={require('../../../assets/svg/github.svg').default} alt=""/>
                            </a>

                        </div>

                    </div>
                    <div className={style.desc}>© 2020 Все права защищены</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;