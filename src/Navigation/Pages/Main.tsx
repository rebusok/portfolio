import React, {lazy} from 'react';
import Skills from "./Skills/Skills";
import Jobs from "./Jobs/Jobs";
import Employ from "./Employ/Employ";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
const AvatarComponent = lazy(() => import("./Presentation/Presentation"));
const Main = () => {
    return (
        <React.Fragment>
            <AvatarComponent/>
            <Skills/>
            <Jobs/>
            <Employ/>
            <Contact title={'Contact'}/>
            <Footer/>
        </React.Fragment>
    );
};

export default Main;