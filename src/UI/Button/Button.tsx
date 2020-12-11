import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Button.module.scss'


type ButtonType = {
    title: string
}

const Button = (props: ButtonType) => {
    return (
        <React.Fragment>
            <NavLink to={''} className={style.btn}>{props.title}</NavLink>
        </React.Fragment>
    );
};

export default Button;