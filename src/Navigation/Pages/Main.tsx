import React, {lazy, Suspense} from 'react';
import Skills from "./Skills/Skills";
import Jobs from "./Jobs/Jobs";
import Employ from "./Employ/Employ";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
const AvatarComponent = lazy(() => import("./Presentation/Presentation"));
const renderLoader = () => <p>Loading</p>;
const Main = () => {
    return (
        <React.Fragment>
            <Suspense fallback={renderLoader()}>
                <AvatarComponent />
            </Suspense>
            <Suspense fallback={renderLoader()}>
                <Skills/>
            </Suspense>
            <Suspense fallback={renderLoader()}>
                <Jobs/>
            </Suspense>
            <Employ/>
            <Contact title={'Contact'}/>
            <Footer/>
        </React.Fragment>
    );
};

export default Main;