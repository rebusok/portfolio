import React from 'react';
import style from './Employ.module.scss'
import Button from "../../../UI/Button/Button";
import Title from "../../../components/Title/Title";


const Employ = () => {
    return (
        <div className={style.Employ}>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <Title title={'I Am Available For Freelancer'}/>
                    <Button title={"Нанять меня"}/>
                </div>
            </div>
        </div>
    );
};

export default Employ;