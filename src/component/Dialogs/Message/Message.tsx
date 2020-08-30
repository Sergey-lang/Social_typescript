import React from 'react';
import style from './Message.module.css';
import avatar from './../../../asets/images/user_photo.png'

type MessageType = {
    message: string
    id: number
}

function Message(props: MessageType) {
    return (
        <div className={style.message_block}>
            <div className={style.user_avatar_name}>
                <div className={style.avatar}><img src={avatar}/></div>
                <div className={style.user_name}>user name</div>
            </div>
            <div className={style.message}>
                <p>{props.message}
                </p>
            </div>
        </div>
    )
}

export default Message;