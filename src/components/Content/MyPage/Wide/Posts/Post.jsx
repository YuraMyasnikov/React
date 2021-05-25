import React from 'react';
import p from './post.module.css';
import {addElementActionCreator, updatePostActionCreator} from "../../../../../redux/page-reducer";



const Post = (props) => {
    console.log('&&&',props)

    //link to textarea
    let newPost = React.createRef();

    let MyUpdate = () => {
        props.change(newPost.current.value);
    }
    let MyClick = ()=> {
        props.click(props.value)
    }

    console.log('post', props)
    const posts = props.posts;
    /*let sim = newPost.current.value*/

    return (
        <div className={p.block}>
            <div className={p.post}>
                {/*принимаю ссылку*/}
                <textarea   ref={newPost}
                            value={props.value}
                            onChange={MyUpdate}
                />

                <button
                    onClick={MyClick}
                >
                    Отправить
                </button>

                {props.posts.map((post) => {
                    return (
                        <div> {post.post} </div>
                    )
                })}

            </div>
        </div>

    );
}

export default Post;