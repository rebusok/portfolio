import React from "react";
import { NavLink } from "react-router-dom";
import {PATH} from "../../Routes/Routes";
import BackDrop from "../../../components/navigation/BackDrop/BackDrop";
import s from './HeaderBur.module.scss'


function HeaderBur(props:any) {
    const cls = [
        s.Header
    ]

    if (!props.isOpen){
        cls.push(s.close)
    }
    const clickHandler = () => {
        props.onClose()
    }
    return (
        <React.Fragment>
            <nav className={cls.join(' ')}>
                <div className={s.wrapper}>
                    <NavLink
                        exact to={PATH.MAIN}
                        activeClassName={s.active}
                        onClick={clickHandler}>Main</NavLink>
                    <NavLink
                        to={'/skills'}
                        activeClassName={s.active}
                        onClick={clickHandler}>Skills</NavLink>
                    <NavLink
                        to={'/project'}
                        activeClassName={s.active}
                        onClick={clickHandler}>Project</NavLink>
                    <NavLink
                        to={'/contacts'}
                        activeClassName={s.active}
                        onClick={clickHandler}>Contact</NavLink>
                </div>
            </nav>
            {props.isOpen ? <BackDrop onClick={props.onClose}/> : null}
        </React.Fragment>
    );
}

export default HeaderBur;
