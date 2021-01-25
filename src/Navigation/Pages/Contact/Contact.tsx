import React from 'react';
import style from './Contact.module.scss'
import Button from "../../../UI/Button/Button";
import Title from '../../../components/Title/Title';


const Contact = () => {
    return (
        <div className={style.Contact}>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <Title title={'Contact'}/>
                    <form action="">
                        <input type="text" placeholder={'Name'}/>
                        <input type="text" placeholder={'E-mail'}/>
                        <textarea placeholder={'You message'}/>
                    </form>
                    <div className={style.button}>
                        <Button title={"Отправить"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;