import React from 'react';
import style from './Button.module.scss'


type ButtonType = {
    title: string
    classAdd?: string
    link?: string
}

const Button = (props: ButtonType) => {
    const finalClassName =`${style.btn} ${props.classAdd ? style[props.classAdd] : ''}`
    const finalLink = props.link ? props.link : ''
    return (
        <React.Fragment>
            <a href={finalLink} className={finalClassName }>{props.title}</a>
        </React.Fragment>
    );
};

export default Button;