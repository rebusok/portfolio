import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Button.module.scss'


type ButtonType = {
    title: string
    classAdd?: string
}

const Button = (props: ButtonType) => {
    const finalClassName =`${style.btn} ${props.classAdd ? style[props.classAdd] : ''}`
    return (
        <React.Fragment>
            <NavLink to={''} className={finalClassName }>{props.title}</NavLink>
        </React.Fragment>
    );
};

export default Button;