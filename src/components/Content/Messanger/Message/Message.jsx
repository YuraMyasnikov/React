import React from 'react';
import m from './message.module.css';

const Message = (props) => {
    return (
        <div className={m.message}>
            <div className={m.item}>
                <p className={m.text}> {props.message} </p>
            </div>
        </div>
    );
}

export default Message;