import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import Main from "./components/Main/Main";
import store, {sub} from "./redux/state";

const test = ()=>{
    return 'yura';
}
const RenderIndex = () => {

    ReactDOM.render(
        <Main  store={store}/>,
        document.getElementById('root')
    );
}

store.subscribe(RenderIndex)

RenderIndex();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/*reportWebVitals();*/
