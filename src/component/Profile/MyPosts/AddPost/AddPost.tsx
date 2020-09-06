import React from 'react';
import style from './AddPost.module.css';

type AddPostType = {
    addNewPost: (postText: string) => void
}

function AddPost(props: AddPostType) {
    let newPostRef = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        if (newPostRef.current) {
            props.addNewPost(newPostRef.current.value)
        }
    }
    return (
        <div className={style.add_new_posts}>
            <div>
                <textarea ref={newPostRef} placeholder='What is new?' className={style.area}></textarea>
            </div>
            <div>
                <button className={style.add_post_button} onClick={addPost}>Add post</button>
            </div>
        </div>
    )
}

export default AddPost;