import React from 'react';
import {addElementActionCreator, updatePostActionCreator} from "../../../../../redux/page-reducer";
import Post from "./Post";
import {connect} from "react-redux";

/*const PostContainer = (props) => {

    let value = props.state.newPost;

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
}*/

let mapStateToProps = (state)=>{
    console.log('!!!!', state)
    return{
        value: state.page.wide.newPost,
        posts: state.page.wide.posts
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        change: (param)=>{
            let active = updatePostActionCreator(param)
            dispatch(active)
        },
        click: (param)=>{
            let action = addElementActionCreator(param);
            dispatch(action)
        }
    }
}

let PostContainer = connect(mapStateToProps,mapDispatchToProps)(Post)

export default PostContainer;