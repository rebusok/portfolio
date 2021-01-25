import React from 'react';
import './App.css'
import Header from "./Navigation/Pages/Header/Header";
import {HashRouter} from 'react-router-dom'
import Routes from "./Navigation/Routes/Routes";

function App() {
    return (
        <div className={'app'}>
            <HashRouter>
                <Header/>
                <Routes/>
            </HashRouter>
        </div>
    );
}

export default App;
