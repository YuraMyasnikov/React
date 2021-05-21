import React from 'react';
import './wide.css';
import Post from "./Posts/Post";

function Wide(props) {
    console.log('wide', props)
    return (
        <div className="wide">
            <Post
                state={props.state}
                dispatch={props.dispatch}
                subscribe = {props.subscribe}
            />
        </div>
    );
}

export default Wide;