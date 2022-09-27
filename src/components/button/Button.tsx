import React from 'react';
import styles from './Button.module.scss';

interface IProps {
    type: String,
    action: ()=>void,
}

export const Button = (props: IProps) => {

    return (
        <button onClick={props.action} type={"reset"} className={styles.button}>{props.type}</button>
    )
};