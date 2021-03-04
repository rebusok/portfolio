import React from 'react';
import style from './Presentation.module.scss'
import Particles from "react-particles-js";
import ReactTypingEffect from "react-typing-effect";


const particlesObj = {
    'particles': {
        'number':{
            'value': 150,
            'density':{
                'enable': true,
                'value_area': 800
            }
        }
    }
}

const Presentation = () => {
    return (
        <div className={style.Presentation}>
            <Particles className={style.particles} params={particlesObj}/>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.block1}>

                        Привет!
                        <h1 className={style.line_rev
                        }>Меня зовут <span className={style.line_name}>Юрий Грушкин</span></h1>
                        <ReactTypingEffect text={'я front-end разработчик'}/>

                    </div>
                    <div className={style.block2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                        architecto
                        debitis distinctio dolore ducimus, error exercitationem fuga fugiat illum magnam molestiae
                        mollitia
                        natus repellat, sunt unde. Delectus dolores ea facilis.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presentation;