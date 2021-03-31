import React, {useState} from 'react';
import style from './Employ.module.scss'
import Title from "../../../components/Title/Title";
// @ts-ignore
import Flip from 'react-reveal/Flip';
import Modal from "../../../components/Modal/Modal";
import Contact from "../Contact/Contact";

const Employ = () => {

    const [modal, setModal] = useState<boolean>(false)
    const onClickHandler = () => {
        setModal(true)
    }
    return (
        <div className={style.Employ}>
            <div className={style.container}>

                <Flip bottom>
                <div className={style.wrapper}>
                    <Title title={'I Am Available For Freelancer'}/>
                    <button className={style.btnNavLink} onClick={onClickHandler}>Нанять меня</button>
                </div>
                </Flip>
                <Modal modal={modal} setModal={setModal}>
                    <Contact title={'You contact'} setModal={setModal}/>
                </Modal>
            </div>
        </div>
    );
};

export default Employ;