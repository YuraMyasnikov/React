import React from 'react';
import './wide.css';
import PostContainer from "./Posts/PostContainer";

function Wide(props) {
    console.log('wide', props)
    return (
        <div className="wide">
            <PostContainer
                state={props.state}
                dispatch={props.dispatch}
                subscribe = {props.subscribe}
            />
        </div>
    );
}

export default Wide;