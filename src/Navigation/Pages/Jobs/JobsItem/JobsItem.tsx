import React, {CSSProperties} from 'react';
import style from './JobsItem.module.scss'
import Button from "../../../../UI/Button/Button";
// @ts-ignore
import Rotate from 'react-reveal/Rotate';

type PropsStyle = {
    style: CSSProperties
}

const JobsItem: React.FC< PropsStyle> = ( props) => {
    return (
        <React.Fragment>
            <Rotate bottom left>
            <div className={style.wrapper}>
                <div className={style.image} style={props.style}>
                    <Button title={"Смотреть"} classAdd={'jobs_btn'}/>
                </div>
                <div className={style.description}>
                    <div className={style.title}><h3>Название проекта</h3></div>
                    <div className={style.desk}>Краткое написание</div>
                </div>
            </div>
            </Rotate>
        </React.Fragment>
    );
};

export default JobsItem;