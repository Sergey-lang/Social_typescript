import React from 'react';
import style from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

type DialogPropsType = {
    id: number
    name: string
}

export const Dialog: React.FC<DialogPropsType> = (props) => {
    return (
        <div className={style.dialog_block}>
            <div className={style.username}>
                <span><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></span>
            </div>
        </div>
    )
}
