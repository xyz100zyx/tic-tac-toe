import React from 'react';
import styles from './FormLabel.module.scss';

interface IProps {
    text: String,
}

export const FormLabel = (props: IProps) => {
    return (
        <p className={styles.label}>Please, input the name of players</p>
    )
}