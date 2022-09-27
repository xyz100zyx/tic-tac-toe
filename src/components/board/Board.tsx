import React from 'react';
import {RootState} from "../../redux/store";
import {useSelector} from "react-redux";
import {Cell} from "../cell/Cell";
import styles from './Board.module.scss';


export const Board: React.FC = () => {

    const boardState = useSelector((state: RootState) => state.board.board)

    return (
        <div className={styles.board}>
            {boardState.map((item, row) => {
                return item.map((value, column) => {
                    return <Cell value={(value || '')} index={`${row}${column}`}/>
                })
            })}
        </div>
    );
};