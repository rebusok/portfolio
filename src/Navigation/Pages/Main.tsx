import React from 'react';
import Presentation from "../../components/Presentation/Presentation";
import Skills from "../../components/Skills/Skills";
import Jobs from "../../components/Jobs/Jobs";
import Employ from "../../components/Employ/Employ";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Main = () => {
    return (
        <React.Fragment>
            <Presentation/>
            <Skills/>
            <Jobs/>
            <Employ/>
            <Contact/>
            <Footer/>
        </React.Fragment>
    );
};

export default Main;