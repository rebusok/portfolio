import React from 'react';
import style from './Skills.module.scss'
import SkillsItem from "./SkillsItem/SkillsItem";
import Title from "../../../components/Title/Title";


const Skills = () => {
    return (
        <div className={style.Skills}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.my_skills}>
                        <Title title={'My skills'}/>
                    </div>
                    <div className={style.ability}>
                        <SkillsItem/>
                        <SkillsItem/>
                        <SkillsItem/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;