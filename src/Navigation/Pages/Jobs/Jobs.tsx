import React from 'react';
import style from './Jobs.module.scss'
import JobsItem from "./JobsItem/JobsItem";
import Title from "../../../components/Title/Title";
import image1 from '../../../assets/image/blog1.jpg'
import image2 from '../../../assets/image/blog2.jpg'

const Jobs = () => {

    const social = {
        backgroundImage: 'url(' + image1 + ')',
    }
    const social2 = {
        backgroundImage: 'url(' + image2 + ')',
    }
    return (
        <div className={style.Jobs}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.my_jobs}>
                        <Title title={'My Project'}/>
                    </div>
                    <div className={style.wrapper_item}>
                        <JobsItem style={social}/>
                        <JobsItem style={social2}/>
                        <JobsItem style={social2}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Jobs;