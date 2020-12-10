import React from 'react';
import style from './Employ.module.scss'


const Employ = () => {
    return (
        <div className={style.Employ}>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.title}>Рассматриваю варианты удаленной работы</div>

                    <a href="#">Нанять меня</a>

                </div>
            </div>
        </div>
    );
};

export default Employ;