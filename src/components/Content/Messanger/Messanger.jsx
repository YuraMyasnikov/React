import React from 'react';
import './messanger.css';
import m from './messanger.module.css';

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Messanger = (props) => {
    return (
        <div className={m.messanger}>
            <div className={m.dialods}>
                <Dialog name="Юра" id={1}/>
                <Dialog name="Рома" id={2}/>
                <Dialog name="Илья" id={3}/>
                <Dialog name="Вика" id={4}/>
                <Dialog name="Лена" id={5}/>
            </div>
            <div className={m.messages}>
                <Message message="Привет Юрец" />
                <Message message="как дела" />
                <Message message="ты приедешь?" />
                <Message message="Какие платы" />
            </div>
        </div>
    );
}

export default Messanger;