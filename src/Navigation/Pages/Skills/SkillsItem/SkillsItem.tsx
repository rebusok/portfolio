import React from 'react';
import style from './SkillsItem.module.scss'


const SkillsItem = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.ava}>ava</div>
            <div className={style.react}>React</div>
            <div className={style.description}>Подробное описания навыка</div>
        </div>
    );
};

export default SkillsItem;