import React from 'react';
import {addElementActionCreator, updatePostActionCreator} from "../../../../../redux/page-reducer";
import Post from "./Post";

const PostContainer = (props) => {

    let value = props.state.newPost;

    console.log('PostContainer', props)
    const posts = props.state.posts;

    let change = (simvol)=>{
        let active = updatePostActionCreator(simvol)
        props.dispatch(active)
    }
    let click = (param)=>{
        let action = addElementActionCreator(param);
        props.dispatch(action)
        props.state.newPost = '';
    }

    return <Post click={click} change={change} posts={posts} value={value} />;
}

export default PostContainer;