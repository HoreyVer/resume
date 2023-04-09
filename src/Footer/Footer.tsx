import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'


function Footer() {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Ivanov Ivan</h2>
                <div className={style.contact}>
                    <a href={"#"} className={style.a}>A</a>
                    <a href={"#"} className={style.a}>B</a>
                    <a href={"#"} className={style.a}>C</a>
                    <a href={"#"} className={style.a}>D</a>
                    <a href={"#"} className={style.a}>E</a>
                </div>
                <p>© 2023 Saint-Petersburg, All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
