import React from 'react';
import style from './Work.module.css';

type WorkType = {
    title: string,
    description: string
}

function Work(props: WorkType) {
    return (
        <div className={style.work}>
            <div className={style.mainBlock}>
                <div className={style.icon}>
                    Picture
                </div>
                <button>Look</button>
            </div>
            <span className={style.title}>{props.title}</span>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default Work;
