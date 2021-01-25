import React from 'react';
import style from './Jobs.module.scss'
import JobsItem from "./JobsItem/JobsItem";
import Title from "../../../components/Title/Title";


const Jobs = () => {
    return (
        <div className={style.Jobs}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.my_jobs}>
                        <Title title={'My Project'}/>
                    </div>
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