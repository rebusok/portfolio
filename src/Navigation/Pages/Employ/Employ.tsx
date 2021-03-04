import React from 'react';
import style from './Employ.module.scss'
import Button from "../../../UI/Button/Button";
import Title from "../../../components/Title/Title";
// @ts-ignore
import Flip from 'react-reveal/Flip';

const Employ = () => {
    return (
        <div className={style.Employ}>
            <div className={style.container}>
                <Flip bottom>
                <div className={style.wrapper}>
                    <Title title={'I Am Available For Freelancer'}/>
                    <Button title={"Нанять меня"}/>
                </div>
                </Flip>
            </div>
        </div>
    );
};

export default Employ;