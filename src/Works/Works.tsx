import React from 'react';
import style from './Works.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Work from "./Work/Work";

function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Works</h2>
                <div className={style.works}>
                    <Work title={"Social Network"} description={"SAa ds asa d sad sa dsasd asd."}></Work>
                    <Work title={"Todolist"} description={"SAa ds asa d sad sa dsasd asd dsfdsfds sdf dsf   sdfdsf dsf sdfdsf."}></Work>
                </div>
            </div>
        </div>
    );
}

export default Works;
