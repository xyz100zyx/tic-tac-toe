import React from 'react';
import {useDispatch} from "react-redux";
import styles from './Form.module.scss';
import {FormInput} from "../formInput/FormInput";
import {Button} from "../button/Button";
import {FormLabel} from "../formLabel/FormLabel";
import {setStart} from "../../redux/slices/popupSlice";
import {addPlayer} from "../../redux/slices/playerSlice";


export const Form = () => {

    const [firstName, setFirstName] = React.useState('')
    const [secondName, setSecondName] = React.useState('')
    const dispatch = useDispatch();

    const onButtonClick = () => {
        dispatch(setStart(false));
        dispatch(addPlayer(firstName))
        dispatch(addPlayer(secondName))
    }

    return (
        <form className={styles.form}>
            <FormLabel text={`Please, input the name of players`} />
            <FormInput changeName={setFirstName} placeholder={`X-Player...`} />
            <FormInput changeName={setSecondName} placeholder={`0-Player...`} />
            <Button action={() => onButtonClick()} type={`DONE`} />
        </form>
    )
}