import React from 'react';
import './wide.css';
import PostContainer from "./Posts/PostContainer";

function Wide(props) {
    console.log('wide', props)
    return (
        <div className="wide">
            <PostContainer />
        </div>
    );
}

export default Wide;