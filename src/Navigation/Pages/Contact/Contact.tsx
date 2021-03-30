import React, {ChangeEvent, useState} from 'react';
import style from './Contact.module.scss'
import Title from '../../../components/Title/Title';
import {Api} from "../../../API/API";


const Contact = () => {
    const [name, setName] =useState<string>('')
    const [email, setEmail] =useState<string>('')
    const [mes, setMes] =useState('')
    const [sendMes, setSendMes] =useState('')
    const [dissable, setDissable] = useState(false)
    const ChangeInputName = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const ChangeInputEmail = (e:ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const ChangeInputMes = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setMes(e.currentTarget.value)
    }
    const onSubmitHandler = async () => {
        setDissable(true)
        if(name.trim()) {
            debugger
            const res = await Api.sendMail({name: name, email: email, mes: mes})
            try {
                if (res.status === 200) {
                    setSendMes('Success')

                        setTimeout(() => {
                            setSendMes('')
                        }, 1000)

                }
                setDissable(false)
            } catch (e) {
                return setSendMes(e.message)

            }
        } else {
            setDissable(false)
            setSendMes('Name Req')
        }



    }

    return (
        <div className={style.Contact}>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <Title title={'Contact'}/>
                    <form action="" >
                        <input type="text" placeholder={'Name'} value={name} onChange={(e) => ChangeInputName(e)}/>
                        <input type="text" placeholder={'E-mail'} value={email} onChange={(e) => ChangeInputEmail(e)}/>
                        <textarea placeholder={'You message'} value={mes} onChange={(e) => ChangeInputMes(e)}/>
                    </form>
                    <div className={style.button}>
                        <button title={"Отправить"} className={style.btnSend} disabled={dissable} onClick={onSubmitHandler}>Отправить</button >
                        {
                            dissable ? <span className={style.sendFont}>Loading</span> :  sendMes.length > 0 ? <span className={style.sendFont}>{sendMes}</span> :  null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;