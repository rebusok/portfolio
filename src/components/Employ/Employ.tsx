import React from 'react';
import style from './Employ.module.scss'
import Button from "../../UI/Button/Button";


const Employ = () => {
    return (
        <div className={style.Employ}>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.title}>Рассматриваю варианты удаленной работы</div>
                    <Button title={"Нанять меня"}/>
                </div>
            </div>
        </div>
    );
};

export default Employ;