import React from 'react';
import Presentation from "./Presentation/Presentation";
import Skills from "./Skills/Skills";
import Jobs from "./Jobs/Jobs";
import Employ from "./Employ/Employ";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Main = () => {
    return (
        <React.Fragment>
            <Presentation/>
            <Skills/>
            <Jobs/>
            <Employ/>
            <Contact title={'Contact'}/>
            <Footer/>
        </React.Fragment>
    );
};

export default Main;