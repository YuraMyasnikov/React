import React from 'react';
import './messanger.css';
import m from './messanger.module.css';

import {clickMessageCreator, updateMessageCreator} from "../../../redux/messanger-reducer";
import d from "./Dialog/dialog.module.css";
import {NavLink} from "react-router-dom";

const Messanger = (props) => {
    console.log("messenger!", props);

    let MyUpdate = (e) => {
        let simvol = e.target.value;
        props.changeMessage(simvol)
    }
    let MyClick = () => {
        props.clickMessage(props.value);
    }

    let dialogs = props.dialogsData;
    let messages = props.messagesData;

    return (
        <div className={m.messanger}>
            <div className={m.dialods}>
                {dialogs.map( (dialog)=>{
                    return(
                        <div>
                            {dialog.name}
                        </div>
                    )
                } )}
            </div>
            <div className={m.messages}>
                {messages.map( (message)=>{
                    return(
                        <div>{message.name}</div>
                    )
                } )}
            </div>

            <div>
                <textarea
                    value={props.value}
                    onChange={MyUpdate}
                >
                </textarea>
            </div>

            <div>
                <button onClick={MyClick}>
                    Отправить
                </button>
            </div>

        </div>
    );
}

export default Messanger;