import React, {CSSProperties} from 'react';
import style from './JobsItem.module.scss'
import Button from "../../../../UI/Button/Button";
// @ts-ignore
import Rotate from 'react-reveal/Rotate';

type PropsStyle = {
    style?: CSSProperties
    link?:string
    title: string
    desc: string
}

const JobsItem: React.FC< PropsStyle> = ( props) => {
    return (
        <React.Fragment>
            <Rotate bottom left>
            <div className={style.wrapper}>
                <div className={style.image} style={props.style}>
                    <Button title={"Смотреть"} classAdd={'jobs_btn'} link={props.link}/>
                </div>
                <div className={style.description}>
                    <div className={style.title}><h3>{props.title}</h3></div>
                    <div className={style.desk}>{props.desc}</div>
                </div>
            </div>
            </Rotate>
        </React.Fragment>
    );
};

export default JobsItem;