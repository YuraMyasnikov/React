import React from 'react';
import p from './post.module.css';
import {addElementActionCreator, updatePostActionCreator} from "../../../../../redux/page-reducer";


/*console.log(addElementActionCreator());
console.log(updatePostActionCreator());*/

//link to textarea
let newPost = React.createRef();

const Post = (props) => {
    console.log('post', props)
    const posts = props.state.posts;

    return (

        <div className={p.block}>
            <div className={p.post}>
                {/*принимаю ссылку*/}
                <textarea ref={newPost}
                          value={props.state.newPost}
                          onChange={() => {
                              let sim = newPost.current.value
                              let active = updatePostActionCreator(sim)
                              props.dispatch(active)
                          }}
                />

                <button onClick={() => {
                    let info = newPost.current.value;
                    let action = addElementActionCreator(info);
                    props.dispatch(action)
                    props.state.newPost = '';
                }

                }> Отправить
                </button>

                {posts.map((post) => {
                    return (
                        <div> {post.post} </div>
                    )
                })}

            </div>
        </div>
    );
}

export default Post;