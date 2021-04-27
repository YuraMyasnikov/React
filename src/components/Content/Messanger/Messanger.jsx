import React from 'react';
import './messanger.css';
import m from './messanger.module.css';

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Messanger = (props) => {
    console.log("messenger",props);

    let dialogs = props.state.dialogsData.map( (el) => {
        return  <Dialog name={el.name} id={el.id} img={el.img}/>
    } )
    let messages = props.state.messagesData.map( (el) => {
        return <Message message={el.name} />;
    } )

    return (
        <div className={m.messanger}>
            <div className={m.dialods}>
                {dialogs}
            </div>
            <div className={m.messages}>
                {messages}
            </div>
        </div>
    );
}

export default Messanger;