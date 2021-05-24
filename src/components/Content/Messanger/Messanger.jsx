import React from 'react';
import './messanger.css';
import m from './messanger.module.css';

import {clickMessageCreator, updateMessageCreator} from "../../../redux/messanger-reducer";

const Messanger = (props) => {
    console.log("messenger", props);

    let MyUpdate = (e) => {
        let simvol = e.target.value;
        props.change(simvol)
    }
    let MyClick = () => {
        props.click();
    }

    return (
        <div className={m.messanger}>
            <div className={m.dialods}>
                {props.dialogs}
            </div>
            <div className={m.messages}>
                {props.messages}
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