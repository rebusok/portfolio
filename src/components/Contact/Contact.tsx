import React from 'react';
import style from './Contact.module.scss'
import Button from "../../UI/Button/Button";


const Contact = () => {
    return (
        <div className={style.Contact}>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.title}>Контакты</div>
                    <form action="">
                        <input type="text"/>
                        <input type="text"/>
                        <textarea/>
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