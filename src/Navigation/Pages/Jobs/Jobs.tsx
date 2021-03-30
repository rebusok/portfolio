import React from 'react';
import style from './Jobs.module.scss'
import JobsItem from "./JobsItem/JobsItem";
import Title from "../../../components/Title/Title";
import todolistImage from "../../../assets/Image/todolist_image.jpg"
import socialImage from "../../../assets/Image/Social_network.jpg"
import cardsImage from "../../../assets/Image/Cards_project.jpg"
import hopsImage from "../../../assets/Image/Shops.jpg"


const Jobs = () => {

    const todolist = {
        style: {
            backgroundImage: 'url(' + todolistImage + ')',
        },
        title: 'TodoList',
        link: 'https://rebusok.github.io/Todolist/'
    }
    const social = {
        style: {
            backgroundImage: 'url(' + socialImage + ')',
        },
        title: 'Social Network',
        link: 'https://rebusok.github.io/SocialNetwork/'
    }
    const cards = {

        title: 'Cards Project',
        style: {
            backgroundImage: 'url(' + cardsImage + ')',
        },
        link: 'https://rebusok.github.io/Cards_Project/'
    }
    const shopsTest = {
        title: 'Shops Project',
        style: {
            backgroundImage: 'url(' + hopsImage + ')',
        },
        link: 'https://shop-58b2f.web.app/'

    }
    const projectArray = [todolist, social, cards, shopsTest]
    return (
        <div className={style.Jobs}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.my_jobs}>
                        <Title title={'My Project'}/>
                    </div>
                    <div className={style.wrapper_item}>
                        {projectArray.map(item => {
                            return <JobsItem key={item.link + item.title} link={item.link} title={item.title} desc={'test'} style={item.style}/>
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Jobs;