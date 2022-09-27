import React from 'react';
import {useDispatch} from "react-redux";
import {cellClassName} from "../../controller/controllers";
import {insert} from "../../redux/slices/boardSlice";
import styles from "./Cell.module.scss";

interface IProps{
    value: String,
    index: String,
}

export const Cell = (props: IProps) => {
    const dispatch = useDispatch()
    return (
        <div onClick={() => dispatch(insert([props.index]))} className={cellClassName((props.value), styles)} />
    )
}