import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Main from "../Pages/Main";

export const PATH = {
    MAIN: "/main",

}
const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.MAIN}/>}/>
                <Route path={PATH.MAIN} render={() => <Main/>}/>
            </Switch>
        </React.Fragment>
    );
};

export default Routes;