import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import Main from "./components/Main/Main";
import store from "./redux/redux-state";
import ReactReduxContext, {Provider} from "react-redux";
import {render} from "@testing-library/react";


ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>
    , document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/*reportWebVitals();*/
