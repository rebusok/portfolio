import React from 'react';
import style from './JobsItem.module.scss'


const JobsItem = () => {
    return (
        <React.Fragment>
            <div className={style.wrapper}>
                <div className={style.image}>
                    <a href="#">Смотреть</a>
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