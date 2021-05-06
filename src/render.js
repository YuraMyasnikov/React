import React from 'react';
import ReactDOM from "react-dom";
import Main from "./components/Main/Main";
import state, {addStateElement} from "./redux/state";
import {updatePostText} from "./redux/state";


export const RenderFullTree = () => {
    ReactDOM.render(
        <Main state={state} addStateElement={addStateElement} updatePostText={updatePostText} />,
        document.getElementById('root')
    );
}