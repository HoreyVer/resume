import React from 'react';
import style from './Freelance.module.css';
import styleContainer from '../common/styles/Container.module.css'

function Freelance() {
    return (
        <div className={style.freelance}>
            <div className={`${styleContainer.container} ${style.freelanceContainer}`}>
                <h2 className={style.title}>I Am Available For Freelancer</h2>
                <button>Hire me</button>
            </div>


        </div>
    );
}

export default Freelance;
