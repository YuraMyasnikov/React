import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import Main from "./components/Main/Main";
import store from "./redux/redux-state";
import {render} from "@testing-library/react";


const RenderIndex = (state) => {
    ReactDOM.render(
        <Main store={store}  state={state} dispatch={store.dispatch.bind({store})} />,
        document.getElementById('root')
    );
}

RenderIndex();

store.subscribe( ()=>{
    let state = store.getState();
    RenderIndex(state);
} );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/*reportWebVitals();*/
