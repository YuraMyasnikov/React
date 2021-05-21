import React from 'react';
import './messanger.css';
import m from './messanger.module.css';

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {clickMessageCreator, updateMessageCreator} from "../../../redux/messanger-reducer";

const Messanger = (props) => {
    console.log("messenger",props);

    let changeMessage = (e)=>{
        console.log(e.target.value);
        let simvol = e.target.value;
        props.dispatch(updateMessageCreator(simvol))
    }
    let clickMessage = () =>{
        props.dispatch(clickMessageCreator(newSimvol))
        props.state.newMessage = '';
    }
    let newSimvol = props.state.newMessage;

    let dialogs = props.state.dialogsData.map( (person) => {
        return  <Dialog name={person.name} id={person.id} img={person.img}/>
    } )
    let messages = props.state.messagesData.map( (message) => {
        return <Message message={message.name} />;
    } )

    return (
        <div className={m.messanger}>
            <div className={m.dialods}>
                {dialogs}
            </div>
            <div className={m.messages}>
                {messages}
            </div>
            <div>
                <div>
                    <textarea
                        value={newSimvol}
                        onChange={changeMessage}
                    >

                    </textarea>
                </div>
                <div>
                    <button onClick={clickMessage}>
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Messanger;