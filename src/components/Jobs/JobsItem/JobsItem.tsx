import React from 'react';
import style from './JobsItem.module.scss'
import Button from "../../../UI/Button/Button";


const JobsItem = () => {
    return (
        <React.Fragment>
            <div className={style.wrapper}>
                <div className={style.image}>
                    <Button title={"Смотреть"}/>
                </div>
                <div className={style.description}>
                    <div className={style.title}>Название проекта</div>
                    <div className={style.desk}>Краткое написание</div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default JobsItem;