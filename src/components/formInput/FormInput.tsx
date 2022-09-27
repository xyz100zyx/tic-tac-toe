import React, {Dispatch, SetStateAction} from 'react';
import styles from './FormInput.module.scss';

interface IProps{
    placeholder: String,
    changeName: React.Dispatch<React.SetStateAction<string>>,
}

export const FormInput = (props: IProps) => {

    const inputRef = React.useRef(null);

    const handleChange = ( text: String ) => {
        props.changeName(text.toString())
    }

    return (
        <input
            ref={inputRef.current}
            onChange={(e) => handleChange(e.target.value)}
            placeholder={`${props.placeholder}`}
            type={"text"}
            className={styles.input}
        />
    )
}