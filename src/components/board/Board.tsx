import React from 'react';
import {RootState} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {Cell} from "../cell/Cell";
import styles from './Board.module.scss';
import {setFinish} from "../../redux/slices/popupSlice";
import {incScore} from "../../redux/slices/playerSlice";


export const Board: React.FC = () => {

    const dispatch = useDispatch()
    const boardState = useSelector((state: RootState) => state.board.board)
    const winState = useSelector((state: RootState) => state.board.winState)
    const players = useSelector((state: RootState) => state.player.players)

    React.useEffect(() => {
        if (winState === 'x' || winState === 'o' || winState==='-'){
            if (winState === 'x') dispatch(incScore(players[0].name))
            if (winState === 'o') dispatch(incScore(players[1].name))
            dispatch(setFinish(true))
        }
    }, [winState])

    return (
        <div className={styles.board}>
            {boardState.map((item, row) => {
                return item.map((value, column) => {
                    return <Cell key={`${row}_${column}`} value={(value || '')} index={`${row}${column}`}/>
                })
            })}
        </div>
    );
};