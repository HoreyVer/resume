import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"HTML"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. awdwadewaeewqrewrewr"}/>
                    <Skill title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. frere"}/>
                    <Skill title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. rtregerg gre gre gr eg reg rgre g reg re gre gr e"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
