import React from 'react';
import style from './Title.module.scss'

type PropsTypeTitle = {
    title: string
}

const Title:React.FC<PropsTypeTitle> = (props) => {
    return (
        <>
            <h2 className={style.title}>{props.title}</h2>
            <div className={style.module_line}/>
        </>
    );
};

export default Title;