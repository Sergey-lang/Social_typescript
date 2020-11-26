import React from 'react';
import preloader from '../../assets/images/Preloader.gif';
import s from './Preloader.module.css'

export const Preloader: React.FC = () => {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt="preloader"/>
        </div>
    );
}

