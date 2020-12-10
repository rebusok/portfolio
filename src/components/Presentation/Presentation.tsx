import React from 'react';
import style from './Presentation.module.scss'


const Presentation = () => {
    return (
        <div className={style.Presentation}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.block1}>Привет! <br/>Меня зовут Юрий Грушкин <br/>
                        я front-end разработчик
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