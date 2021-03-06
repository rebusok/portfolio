import React, {FC} from 'react';
import style from './SkillsItem.module.scss'
// @ts-ignore
import Rotate from "react-reveal/Rotate";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

interface PropsType {
    icon: IconProp
    iconUrl?: string
    title: string

}

const SkillsItem:FC<PropsType> = (props) => {
    return (
        <Rotate bottom left>
        <div className={style.wrapper}>
            <div className={style.ava}>
                {props.iconUrl
                    ? <img src={props.iconUrl} alt="" className={style.imgTrans}/>
                    : <FontAwesomeIcon icon={props.icon} transform={{ rotate: -45 }}/>
                }
            </div>
            <div className={style.react}>{props.title}</div>

        </div>
        </Rotate>
    );
};

export default SkillsItem;