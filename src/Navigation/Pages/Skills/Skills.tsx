import React from 'react';
import style from './Skills.module.scss'
import SkillsItem from "./SkillsItem/SkillsItem";
import Title from "../../../components/Title/Title";
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons'
import svgLodi from '../../../assets/svg/typescript.svg'
import svgRedux from '../../../assets/svg/redux_original_logo_icon_146365.svg'
const Skills = () => {
    return (
        <div className={style.Skills}>
            <div className={style.container}>

                <div className={style.content}>
                    <div className={style.my_skills}>
                        <Title title={'My skills'}/>
                    </div>
                    <div className={style.ability}>
                        <SkillsItem icon={faCode} title={'Typescript '} iconUrl={svgLodi}/>
                        <SkillsItem icon={faReact} title={'React'}/>
                        <SkillsItem icon={faDesktop} title={'Redux'} iconUrl={svgRedux}/>



                    </div>

                </div>

            </div>

        </div>
    );
};

export default Skills;