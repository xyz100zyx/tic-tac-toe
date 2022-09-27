import React from 'react';
import styles from './StartPopup.module.scss';
import {Form} from "../form/Form";

export const StartPopup = () => {
    return (
        <div className={styles.popup}>
            <div className={styles.popup__container}>
                <Form />
            </div>
        </div>
    )
}