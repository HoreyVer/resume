import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'

function Contacts() {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contact</h2>
                <form className={style.form}>
                    <input className={style.input} type={"text"} placeholder={"<input>"}/>
                    <input className={style.input} type={"text"} placeholder={"<input>"}/>
                    <textarea className={style.textarea}> textarea</textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
}

export default Contacts;
