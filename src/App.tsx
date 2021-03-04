import React from 'react';
import './App.css'
import {HashRouter} from 'react-router-dom'
import Layout from './components/layout/Layout';

function App() {
    return (
        <div className={'app'}>
            <HashRouter>
                <Layout/>
            </HashRouter>
        </div>
    );
}

export default App;
