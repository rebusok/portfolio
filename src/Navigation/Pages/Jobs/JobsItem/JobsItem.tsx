import React, {CSSProperties} from 'react';
import style from './JobsItem.module.scss'
import Button from "../../../../UI/Button/Button";

type PropsStyle = {
    style: CSSProperties
}

const JobsItem: React.FC< PropsStyle> = ( props) => {
    console.log(props)
    return (
        <React.Fragment>
            <div className={style.wrapper}>
                <div className={style.image} style={props.style}>
                    <Button title={"Смотреть"} classAdd={'jobs_btn'}/>
                </div>
                <div className={style.description}>
                    <div className={style.title}><h3>Название проекта</h3></div>
                    <div className={style.desk}>Краткое написание</div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default JobsItem;