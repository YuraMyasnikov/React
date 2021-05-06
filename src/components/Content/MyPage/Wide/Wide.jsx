import React from 'react';
import w from  './wide.module.css';

function Wide(props) {

    console.log('wide ', props);
    let posts = props.state.posts;

    let myNewPost = React.createRef();
    let fn = props.fn;

    return (
        <div className={w.wide}>
                <textarea name=""
                          id=""
                          cols="30"
                          rows="10"
                          value={props.state.postText}
                          ref={myNewPost}
                          onChange={()=>{
                              let text = myNewPost.current.value;
                              {props.updatePostText(text)};
                          }}/>

                <button onClick={ ()=>{
                    let text = myNewPost.current.value;
                    {props.fn3(text)}
                    {props.state.postText = ""}
                } }>
                    Отправить
                </button>

            {posts && posts.map((post ) => {
                return (
                    <div>{post.name}</div>
                );
            })}
        </div>
    );
}

export default Wide;