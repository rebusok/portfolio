import React from 'react';
import style from './Jobs.module.scss'
import JobsItem from "./JobsItem/JobsItem";


const Jobs = () => {
    return (
        <div className={style.Jobs}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.my_jobs}>Мои работы</div>
                    <div className={style.wrapper_item}>
                        <JobsItem/>
                        <JobsItem/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Jobs;