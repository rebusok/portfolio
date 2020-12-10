import React from 'react';
import style from './Skills.module.scss'
import SkillsItem from "./SkillsItem/SkillsItem";


const Skills = () => {
    return (
        <div className={style.Skills}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.my_skills}>
                        <h3>Мои скилы</h3>
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